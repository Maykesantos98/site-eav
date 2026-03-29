"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";
import { useIsMobile } from "@/constants/useIsMobile";

export function HeroIntro() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
      {/* Background: mão com celular do eav7.com */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/imagem para tela incial.png")}
          alt=""
          fill
          className="object-cover object-[75%_30%] opacity-[0.25] sm:opacity-[0.35] lg:opacity-[0.45]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/75 to-[#0c0a09]/30 lg:via-[#0c0a09]/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/50 via-transparent to-[#0c0a09]" />
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[200px] w-[200px] rounded-full bg-[#6336c4]/10 blur-[50px] eav-hero-glow sm:h-[400px] sm:w-[500px] sm:blur-[120px]" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: text */}
          <div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.08]"
            >
              {t.hero.title1}<span className="eav-gradient-text">{t.hero.titleHighlight}</span>{t.hero.title2}
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-stone-400 sm:mt-6 sm:text-base"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="#conta"
                whileHover={reduce ? {} : { scale: 1.03 }}
                whileTap={reduce ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-violet-950/50 transition-shadow hover:shadow-violet-900/60 sm:px-8 sm:py-4 sm:text-base"
              >
                {t.hero.cta1}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <motion.a
                href="#solucoes"
                whileHover={reduce ? {} : { scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-stone-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-7 sm:py-4 sm:text-base"
              >
                {t.hero.cta2}
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs text-stone-500 sm:mt-10 sm:gap-6 sm:text-xs"
            >
              {[
                { label: t.hero.trust1, icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                { label: t.hero.trust2, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { label: t.hero.trust3, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-emerald-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: empty space — background image shows through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

export function MoedasLibertySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();

  return (
    <section id="solucoes" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[420px] lg:mx-0"
        >
          <div className="absolute inset-0 -m-8 rounded-full bg-[#6336c4]/12 blur-[60px]" aria-hidden />
          <motion.div
            animate={reduce || isMobile ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <EavRemoteImage
              src={eavImages.moedas}
              alt="Ícones de moedas e ativos"
              width={420}
              height={353}
              className="relative h-auto w-full object-contain drop-shadow-[0_0_60px_rgba(99,54,196,0.35)]"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
            {t.moedas.title1}<span className="eav-gradient-text">{t.moedas.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-stone-400 sm:text-base lg:text-lg">
            {t.moedas.desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {t.moedas.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
