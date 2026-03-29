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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-violet-500/[0.08] bg-[#0c0a09]/85 backdrop-blur-2xl backdrop-saturate-[1.8] shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-[#0c0a09]/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <EavLogo height={40} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-lg px-3.5 py-2 text-[13px] font-medium text-stone-400 transition-colors hover:text-[#8e59ff]"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#8e59ff] transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </nav>

          {/* Desktop right side: Login + CTA + Lang */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 text-[13px] font-medium text-stone-400 transition-colors hover:text-white"
            >
              Login
            </a>
            <motion.a
              href="#conta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-violet-950/30 transition-shadow hover:shadow-violet-900/40"
            >
              {t.nav.abrirConta}
            </motion.a>
            <div className="ml-1 h-5 w-px bg-white/10" />
            <button
              onClick={toggle}
              className="ml-1 flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-stone-500 transition-colors hover:text-white"
              aria-label="Trocar idioma"
            >
              {lang === "pt" ? (
                <><FlagUS className="h-3.5 w-auto rounded-[2px]" /> EN</>
              ) : (
                <><FlagBR className="h-3.5 w-auto rounded-[2px]" /> PT</>
              )}
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-stone-500"
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
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-[2px] w-5 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 rounded-full bg-white"
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
            <nav className="flex h-full flex-col items-center justify-center gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-white transition-colors hover:text-[#8e59ff]"
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
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-stone-400 transition-colors hover:text-white"
              >
                Login
              </motion.a>

              <motion.a
                href="#conta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-950/40"
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
