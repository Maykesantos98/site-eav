"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/constants/LangContext";

const links = [
  { href: "/institucional/sobre", labelPt: "Sobre nós", labelEn: "About us" },
  { href: "/institucional/governanca", labelPt: "Governança", labelEn: "Governance" },
  { href: "/institucional/seguranca", labelPt: "Segurança", labelEn: "Security" },
  { href: "/institucional/carreiras", labelPt: "Carreiras", labelEn: "Careers", badge: true },
  { href: "/institucional/contato", labelPt: "Contato", labelEn: "Contact" },
  { href: "/institucional/ouvidoria", labelPt: "Ouvidoria", labelEn: "Ombudsman" },
  { href: "/institucional/termos", labelPt: "Termos de uso", labelEn: "Terms of use" },
  { href: "/institucional/privacidade", labelPt: "Privacidade", labelEn: "Privacy" },
];

export function InstitucionalNav() {
  const pathname = usePathname();
  const { lang } = useLang();

  return (
    <nav className="space-y-0.5">
      <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
        {lang === "pt" ? "Institucional" : "Institutional"}
      </p>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-150 ${
              isActive
                ? "bg-violet-500/10 text-white"
                : "text-stone-500 hover:text-stone-300 hover:bg-white/[0.02]"
            }`}
          >
            {lang === "pt" ? link.labelPt : link.labelEn}
            {link.badge && (
              <span className="rounded-full bg-violet-500/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-violet-400 uppercase">
                {lang === "pt" ? "breve" : "soon"}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
