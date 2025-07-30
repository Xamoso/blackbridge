// app/lp/calculadora/components/CtaAfterCalc.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CtaAfterCalc() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onLead() {
      setVisible(true);
    }
    window.addEventListener('blackbridge:lead_submitted', onLead);
    return () => window.removeEventListener('blackbridge:lead_submitted', onLead);
  }, []);

  if (!visible) return null;

  return (
    <div className="mt-4">
      <Link
        href="/"
        className="inline-flex items-center rounded-lg px-4 py-2 font-medium transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0097b2', color: '#000' }}
      >
        Conheça a Blackbridge
      </Link>
    </div>
  );
}
