"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
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
  const [activeSection, setActiveSection] = useState("inicio");
  const isHome = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const home = basePath || "/";
  const navLinks = [
    { label: t.nav.inicio, href: `${home}#inicio`, id: "inicio" },
    { label: t.nav.cartoes, href: `${home}#cartoes`, id: "cartoes" },
    { label: t.nav.seguranca, href: `${home}#seguranca`, id: "seguranca" },
    { label: t.nav.empresas, href: `${home}#empresas`, id: "empresas" },
    { label: t.nav.app, href: `${home}#app`, id: "app" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar - C6/Inter style */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6336c4] via-[#8e59ff] to-[#b336c1] z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo with glow effect on hover */}
          <Link
            href="/"
            className="group relative flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <div className="absolute -inset-2 rounded-lg bg-[#6336c4]/0 group-hover:bg-[#6336c4]/10 transition-all duration-300" />
            <EavLogo height={scrolled ? 28 : 32} className="transition-all duration-300" />
          </Link>

          {/* Desktop nav - floating pill with active indicator */}
          <nav className="hidden items-center lg:flex">
            <div className="relative flex items-center gap-0.5 rounded-full border border-white/[0.05] bg-[#0a0a0a]/80 px-1.5 py-1.5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language toggle - minimal style */}
            <button
              onClick={toggle}
              className="group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-neutral-500 transition-all hover:text-neutral-300"
              aria-label="Trocar idioma"
            >
              <span className="flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1.5 transition-all group-hover:border-white/[0.1] group-hover:bg-white/[0.04]">
                {lang === "pt" ? (
                  <><FlagUS className="h-3.5 w-auto rounded-[2px]" /> EN</>
                ) : (
                  <><FlagBR className="h-3.5 w-auto rounded-[2px]" /> PT</>
                )}
              </span>
            </button>

            {/* Internet Banking - ghost button */}
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 text-[13px] font-medium text-neutral-400 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-white"
            >
              Internet Banking
            </a>

            {/* CTA - primary with glow */}
            <a
              href={isHome ? "#conta" : `${home}#conta`}
              className="group relative overflow-hidden rounded-full bg-[#6336c4] px-6 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#7344d8]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8e59ff]/0 via-white/20 to-[#8e59ff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">{t.nav.abrirConta}</span>
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1.5 text-xs font-bold text-neutral-500"
              aria-label="Trocar idioma"
            >
              {lang === "pt" ? (
                <><FlagUS className="h-3 w-auto rounded-[1px]" /> EN</>
              ) : (
                <><FlagBR className="h-3 w-auto rounded-[1px]" /> PT</>
              )}
            </button>
            
            {/* Hamburger menu - animated */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/[0.05] bg-white/[0.02] transition-all hover:bg-white/[0.05]"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-5 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-5 rounded-full bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-5 rounded-full bg-white"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay - full screen with blur */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-[#050505]/[0.98] backdrop-blur-xl lg:hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6336c4]/10 rounded-full blur-[120px] pointer-events-none" />
            
            <nav className="relative flex h-full flex-col items-center justify-center gap-5 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="my-4 h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              <motion.a
                href="https://eav7.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-base font-medium text-neutral-400 transition-all hover:border-white/20 hover:text-white"
              >
                Internet Banking
              </motion.a>

              <motion.a
                href={isHome ? "#conta" : `${home}#conta`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.15 }}
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-[#6336c4] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#6336c4]/25"
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
