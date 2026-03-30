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
  { href: "/institucional/termos", labelPt: "Termos", labelEn: "Terms" },
  { href: "/institucional/privacidade", labelPt: "Privacidade", labelEn: "Privacy" },
  { href: "/institucional/faq", labelPt: "Perguntas frequentes", labelEn: "FAQ" },
];

export function InstitucionalNav() {
  const pathname = usePathname();
  const { lang } = useLang();

  return (
    <nav>
      {/* Desktop — vertical list */}
      <div className="hidden lg:block space-y-0.5">
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
      </div>

      {/* Mobile — horizontal pills with scroll */}
      <div className="lg:hidden -mx-5 px-5">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-violet-500/15 text-white border border-violet-500/20"
                    : "bg-white/[0.03] text-stone-500 border border-white/[0.04] hover:text-stone-300"
                }`}
              >
                {lang === "pt" ? link.labelPt : link.labelEn}
                {link.badge && (
                  <span className="rounded-full bg-violet-500/15 px-1 py-px text-[8px] font-bold text-violet-400">
                    !
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
