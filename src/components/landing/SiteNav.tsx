"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { EavLogo } from "@/components/EavLogo";
import { useLang } from "@/constants/LangContext";

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
      <g fill="white">{/* simplified stars */}
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.solucoes, href: "#solucoes" },
    { label: t.nav.seguranca, href: "#seguranca" },
    { label: t.nav.empresas, href: "#empresas" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#0c0a09]/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <EavLogo height={44} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-[#8e59ff] hover:bg-violet-500/5"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 h-5 w-px bg-white/10" />
            {/* Login */}
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-stone-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Login
            </a>
            {/* Abrir Conta */}
            <motion.a
              href="#conta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-1.5 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition-shadow hover:shadow-violet-900/50"
            >
              {t.nav.abrirConta}
            </motion.a>
            {/* Language toggle — far right */}
            <button
              onClick={toggle}
              className="ml-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-stone-400 transition-colors hover:border-violet-500/20 hover:text-white"
              aria-label="Trocar idioma"
            >
              {lang === "pt" ? (
                <><FlagUS className="h-3.5 w-auto rounded-[2px]" /> EN</>
              ) : (
                <><FlagBR className="h-3.5 w-auto rounded-[2px]" /> PT</>
              )}
            </button>
          </nav>

          {/* Mobile hamburger + lang */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-stone-400"
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
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-white"
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
            className="fixed inset-0 z-[55] bg-[#0c0a09]/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-bold text-white transition-colors hover:text-violet-400"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#conta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-3.5 text-base font-bold text-white shadow-lg"
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
