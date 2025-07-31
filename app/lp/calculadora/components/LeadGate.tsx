// app/lp/calculadora/components/LeadGate.tsx
'use client';

import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';

type LeadPayload = {
  name: string;
  email: string;
  phone: string; // E.164
  amount: number;
  currency: string;
  consent: boolean;
  utm?: Record<string, string>;
};

type Country = {
  iso2: string;
  name: string;
  dialCode: string; // sem +
  flag: string;     // emoji
};

const COUNTRIES: Country[] = [
  { iso2: 'BR', name: 'Brasil',          dialCode: '55',  flag: '🇧🇷' },
  { iso2: 'US', name: 'Estados Unidos',  dialCode: '1',   flag: '🇺🇸' },
  { iso2: 'GB', name: 'Reino Unido',     dialCode: '44',  flag: '🇬🇧' },
  { iso2: 'PT', name: 'Portugal',        dialCode: '351', flag: '🇵🇹' },
  { iso2: 'ES', name: 'Espanha',         dialCode: '34',  flag: '🇪🇸' },
  { iso2: 'MX', name: 'México',          dialCode: '52',  flag: '🇲🇽' },
  { iso2: 'CL', name: 'Chile',           dialCode: '56',  flag: '🇨🇱' },
  { iso2: 'AR', name: 'Argentina',       dialCode: '54',  flag: '🇦🇷' },
];

/* ───── Helpers de validação ───── */
function isValidName(name: string) {
  const n = (name || '').trim();
  if (n.length < 5 || n.length > 80) return false;
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(n)) return false;
  const parts = n.split(/\s+/).filter(Boolean);
  if (parts.length < 2) return false;
  if (parts.some(p => p.replace(/[-']/g, '').length < 2)) return false;
  return true;
}
function isValidEmail(email: string) {
  const e = (email || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}
function onlyDigits(s: string) {
  return (s || '').replace(/\D/g, '');
}
function buildE164(dialCode: string, area: string, number: string) {
  const d = onlyDigits(dialCode);
  const a = onlyDigits(area);
  const n = onlyDigits(number);
  return `+${d}${a}${n}`;
}
function isValidE164(e164: string) {
  return /^\+\d{10,15}$/.test(e164);
}

export default function LeadGate() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Mantemos currency fixo em BRL no estado "form"
  const [form, setForm] = useState<LeadPayload>({
    name: '',
    email: '',
    phone: '',
    amount: 0,          // não pré-preenche na UI
    currency: 'BRL',    // fixo
    consent: false,
    utm: {},
  });

  // Telefone por partes (minimal)
  const [countryIso2, setCountryIso2] = useState<string>('BR');
  const [area, setArea] = useState<string>('');   // DDD
  const [local, setLocal] = useState<string>(''); // número
  const country = useMemo<Country>(() => COUNTRIES.find(c => c.iso2 === countryIso2) || COUNTRIES[0], [countryIso2]);
  const e164 = useMemo(() => buildE164(country.dialCode, area, local), [country.dialCode, area, local]);

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  // Valor: estado como string para permitir campo vazio + placeholder
  const [amountInput, setAmountInput] = useState<string>(''); // começa em branco
  const amountNumber = useMemo(() => Number(amountInput), [amountInput]);
  const isAmountValid = amountInput.trim() !== '' && Number.isFinite(amountNumber) && amountNumber >= 100;

  const isFormValid = useMemo(
    () =>
      isValidName(form.name) &&
      isValidEmail(form.email) &&
      isValidE164(e164) &&
      isAmountValid &&
      form.consent,
    [form.name, form.email, form.consent, e164, isAmountValid],
  );

  function getUTM() {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref'].forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    return utm;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isFormValid) {
      setErrors({
        name: isValidName(form.name) ? undefined : 'Digite nome e sobrenome (somente letras).',
        email: isValidEmail(form.email) ? undefined : 'E-mail inválido.',
        phone: isValidE164(e164) ? undefined : 'Telefone inválido.',
      });
      return;
    }

    // Honeypot
    const hp = (document.querySelector('input[name="company"]') as HTMLInputElement | null)?.value || '';
    if (hp.trim()) {
      // não grava, mas libera resultado (silencia bot)
      window.dispatchEvent(new CustomEvent('blackbridge:lead_submitted', {
        detail: { amount: amountNumber, currency: 'BRL', name: form.name },
      }));
      setSubmitted(true);
      const el = document.getElementById('bb-results');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    try {
      setLoading(true);
      const payload: LeadPayload & { honeypot?: string } = {
        ...form,
        amount: amountNumber,  // usa o número validado
        currency: 'BRL',       // força BRL
        phone: e164,
        utm: getUTM(),
        honeypot: hp,
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Falha ao registrar lead');

      // dispara resultados
      window.dispatchEvent(new CustomEvent('blackbridge:lead_submitted', {
        detail: { amount: amountNumber, currency: 'BRL', name: form.name },
      }));

      // esconde o card e scroll para resultados
      setSubmitted(true);
      const el = document.getElementById('bb-results');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      console.error(err);
      alert('Não foi possível registrar seus dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  /* ─── UI compacta ─── */
  const input = 'bg-neutral-800 border border-neutral-700 rounded-lg px-3 h-10 text-sm outline-none focus:border-neutral-500';
  const select = 'bg-neutral-800 border border-neutral-700 rounded-lg px-2 h-10 text-sm outline-none focus:border-neutral-500';

  // classes para fade-out e colapso ao submeter
  const containerClasses = [
    'max-w-md mx-auto',               // pequeno e centralizado
    'bg-neutral-900/60 border border-neutral-800 rounded-xl',
    'p-4 sm:p-5 mb-8',
    'transition-all duration-300',
    submitted ? 'opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden m-0 p-0 border-0' : 'opacity-100',
  ].join(' ');

  if (submitted) {
    // Mantemos o container colapsado (nada visível)
    return <div className={containerClasses} />;
  }

  return (
    <div className={containerClasses}>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {/* Honeypot oculto */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" onChange={() => {}} />

        {/* Nome */}
        <div className="flex flex-col">
          <input
            required
            className={input}
            placeholder="Nome completo"
            value={form.name}
            onChange={(e) => {
              const v = e.target.value;
              setForm((s) => ({ ...s, name: v }));
              setErrors((er) => ({ ...er, name: isValidName(v) ? undefined : 'Digite nome e sobrenome.' }));
            }}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>

        {/* E-mail */}
        <div className="flex flex-col">
          <input
            required
            type="email"
            className={input}
            placeholder="E-mail"
            value={form.email}
            onChange={(e) => {
              const v = e.target.value;
              setForm((s) => ({ ...s, email: v }));
              setErrors((er) => ({ ...er, email: isValidEmail(v) ? undefined : 'E-mail inválido.' }));
            }}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>

        {/* Telefone minimal: país (estreito) + DDD (pequeno) + número (flex) */}
        <div className="flex gap-2">
          <select
            className={`${select} w-24`}
            value={countryIso2}
            onChange={(e) => setCountryIso2(e.target.value)}
            aria-label="País"
          >
            {COUNTRIES.map((c) => (
              <option key={c.iso2} value={c.iso2}>
                {`${c.flag} +${c.dialCode}`}
              </option>
            ))}
          </select>

          <input
            required
            inputMode="numeric"
            className={`${input} w-16`}
            placeholder="DDD"
            value={area}
            onChange={(e) => setArea(onlyDigits(e.target.value).slice(0, 4))}
            aria-label="DDD"
          />

          <input
            required
            inputMode="numeric"
            className={`${input} flex-1`}
            placeholder="Número"
            value={local}
            onChange={(e) => {
              const v = onlyDigits(e.target.value).slice(0, 12);
              setLocal(v);
              const next = buildE164(country.dialCode, area, v);
              setErrors((er) => ({ ...er, phone: isValidE164(next) ? undefined : 'Telefone inválido.' }));
            }}
            aria-label="Número"
          />
        </div>
        {errors.phone && <p className="text-xs text-red-400 -mt-1">{errors.phone}</p>}

        {/* Valor (BRL fixo) */}
        <div className="flex">
          <input
            required
            type="number"
            min={100}
            step={100}
            className={`${input} flex-1`}
            placeholder="Valor"
            value={amountInput}
            onChange={(e) => {
              setAmountInput(e.target.value);
              // mantém form.amount sincronizado quando houver número
              const n = Number(e.target.value);
              setForm((s) => ({ ...s, amount: Number.isFinite(n) ? n : 0 }));
            }}
            aria-label="Valor"
          />
        </div>

        {/* Consentimento */}
        <label className="text-sm flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
            className="h-4 w-4"
            required
          />
          <span className="text-neutral-300">Aceito receber informações.</span>
        </label>

        {/* Ação */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="px-5 h-10 rounded-lg"
            style={{ backgroundColor: '#0097b2', color: '#000' }}
          >
            {loading ? 'Calculando...' : 'Calcular'}
          </button>
        </div>
      </form>
    </div>
  );
}
