"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["pt", "en", "es"];

// Mapeamento de rotas equivalentes
const routeMap: Record<string, Record<string, string>> = {
  // PT
  "/pt": { en: "/en", es: "/es" },
  "/pt/sobre": { en: "/en/about", es: "/es/sobre" },
  "/pt/insight": { en: "/en/insight", es: "/es/insight" },
  "/pt/relatorio": { en: "/en/report", es: "/es/informe" },

  // EN
  "/en": { pt: "/pt", es: "/es" },
  "/en/about": { pt: "/pt/sobre", es: "/es/sobre" },
  "/en/insight": { pt: "/pt/insight", es: "/es/insight" },
  "/en/report": { pt: "/pt/relatorio", es: "/es/informe" },

  // ES
  "/es": { pt: "/pt", en: "/en" },
  "/es/sobre": { pt: "/pt/sobre", en: "/en/about" },
  "/es/insight": { pt: "/pt/insight", en: "/en/insight" },
  "/es/reporte": { pt: "/pt/relatorio", en: "/en/informe" },
};

export default function LanguageSwitcherBurger() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (lang: string) => {
    const translatedPath = routeMap[pathname]?.[lang] || `/${lang}`;
    router.push(translatedPath);
  };

  return (
    <div className="flex gap-4 pt-2 text-sm text-white">
      {locales.map((lang) => (
        <button key={lang} onClick={() => handleChange(lang)}>
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
