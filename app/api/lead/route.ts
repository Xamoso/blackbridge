// app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs';

type LeadPayload = {
  name: string;
  email: string;
  phone: string; // E.164
  // os demais campos existem no formulário, mas não serão salvos agora
  honeypot?: string;
};

async function getSheets() {
  const key = (process.env.GS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n');
  const clientEmail = process.env.GS_CLIENT_EMAIL ?? '';

  if (!clientEmail || !key) {
    throw new Error('Credenciais do Google Sheets ausentes: configure GS_CLIENT_EMAIL e GS_PRIVATE_KEY');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await auth.authorize();
  return google.sheets({ version: 'v4', auth });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;

    // Honeypot (silencia bots, mas não quebra)
    if (body?.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json({ ok: true, skipped: true }, { status: 200 });
    }

    const { name, email, phone } = body || {};
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Campos obrigatórios' }, { status: 400 });
    }

    const spreadsheetId = process.env.GS_SHEET_ID ?? '';
    if (!spreadsheetId) {
      throw new Error('GS_SHEET_ID não configurado');
    }

    const sheets = await getSheets();
    const ts = new Date().toISOString();

    // 🔹 IMPORTANTE: ajuste o nome da aba aqui, se não for exatamente "leads"
    const RANGE = 'leads!A1'; // headers: timestamp | name | email | phone

    // Escreve exatamente 4 colunas, como sua planilha
    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[ts, name, email, phone]],
      },
    });

    // Retornamos info mínima de diagnóstico (pode remover depois)
    const updatedRange = appendRes.data?.updates?.updatedRange ?? null;

    return NextResponse.json({ ok: true, updatedRange }, { status: 201 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Erro /api/lead:', msg);
    return NextResponse.json({ error: 'Falha ao registrar lead', detail: msg }, { status: 500 });
  }
}
