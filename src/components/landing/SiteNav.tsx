"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EavLogo } from "@/components/EavLogo";
import { useLang } from "@/constants/LangContext";
import basePath from "@/constants/basePath";

function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="2" fill="#009739" />
      <path d="M18 3L33 12L18 21L3 12Z" fill="#FEDD00" />
      <circle cx="18" cy="12" r="5.5" fill="#012169" />
      <path d="M13.5 12.5C13.5 12.5 15 10 18 10C21 10 22.5 12.5 22.5 12.5" stroke="white" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="2" fill="#B22234" />
      <path d="M0 2h36M0 5.7h36M0 9.4h36M0 13.1h36M0 16.8h36M0 20.5h36" stroke="white" strokeWidth="1.85" />
      <rect width="14.4" height="12.9" fill="#3C3B6E" />
      <g fill="white">
        <circle cx="2.4" cy="2.1" r="0.7" /><circle cx="7.2" cy="2.1" r="0.7" /><circle cx="12" cy="2.1" r="0.7" />
        <circle cx="4.8" cy="4.3" r="0.7" /><circle cx="9.6" cy="4.3" r="0.7" />
        <circle cx="2.4" cy="6.5" r="0.7" /><circle cx="7.2" cy="6.5" r="0.7" /><circle cx="12" cy="6.5" r="0.7" />
        <circle cx="4.8" cy="8.7" r="0.7" /><circle cx="9.6" cy="8.7" r="0.7" />
        <circle cx="2.4" cy="10.9" r="0.7" /><circle cx="7.2" cy="10.9" r="0.7" /><circle cx="12" cy="10.9" r="0.7" />
      </g>
    </svg>
  );
}

export function SiteNav() {
  const { lang, t, toggle } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  const home = basePath || "/";
  const navLinks = [
    { label: t.nav.inicio, href: `${home}#inicio` },
    { label: t.nav.cartoes, href: `${home}#cartoes` },
    { label: t.nav.seguranca, href: `${home}#seguranca` },
    { label: t.nav.empresas, href: `${home}#empresas` },
    { label: t.nav.app, href: `${home}#app` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#0c0a09]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30"
            : "bg-gradient-to-b from-[#0c0a09]/80 to-transparent backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <EavLogo height={32} />
          </Link>

          {/* Desktop nav — centered pill container */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] px-1.5 py-1 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-1.5 text-[13px] font-medium text-stone-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Lang toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs font-semibold text-stone-500 transition-all hover:border-white/[0.1] hover:text-stone-300"
              aria-label="Trocar idioma"
            >
              {lang === "pt" ? (
                <><FlagUS className="h-3.5 w-auto rounded-[2px]" /> EN</>
              ) : (
                <><FlagBR className="h-3.5 w-auto rounded-[2px]" /> PT</>
              )}
            </button>

            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.08] px-5 py-2 text-[13px] font-medium text-stone-400 transition-all duration-200 hover:border-white/[0.15] hover:text-white hover:bg-white/[0.04]"
            >
              Internet Banking
            </a>

            <a
              href={isHome ? "#conta" : `${home}#conta`}
              className="rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-2 text-[13px] font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#6336c4]/30 hover:brightness-110"
            >
              {t.nav.abrirConta}
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-white/[0.06] px-2.5 py-1.5 text-xs font-bold text-stone-500"
              aria-label="Trocar idioma"
            >
              {lang === "pt" ? (
                <><FlagUS className="h-3 w-auto rounded-[1px]" /> EN</>
              ) : (
                <><FlagBR className="h-3 w-auto rounded-[1px]" /> PT</>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/[0.06]"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-4 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-[1.5px] w-4 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-4 rounded-full bg-white"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-[#0c0a09]/98 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-stone-300 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="my-2 h-px w-16 bg-white/10" />

              <motion.a
                href="https://eav7.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/[0.1] px-8 py-3 text-base font-medium text-stone-400 transition-all hover:border-white/20 hover:text-white"
              >
                Internet Banking
              </motion.a>

              <motion.a
                href={isHome ? "#conta" : `${home}#conta`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.06 }}
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#6336c4]/30"
              >
                {t.nav.abrirConta}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
