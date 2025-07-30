// app/api/data/route.ts
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const base = join(process.cwd(), 'public', 'data');
    const [fx, benchmarks, blackbridge] = await Promise.all([
      readFile(join(base, 'fx.json'), 'utf-8').then(JSON.parse),
      readFile(join(base, 'benchmarks.json'), 'utf-8').then(JSON.parse),
      readFile(join(base, 'blackbridge.json'), 'utf-8').then(JSON.parse),
    ]);

    return NextResponse.json({ fx, benchmarks, blackbridge });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Falha ao carregar dados' }, { status: 500 });
  }
}
