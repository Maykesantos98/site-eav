"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

const AUTOPLAY_MS = 6000;

export function HeroIntro() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const slides = t.hero.slides;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  // Features - informacoes verificaveis
  const features = [
    { icon: "globe", label: "Transferencias internacionais" },
    { icon: "shield", label: "Seguranca de nivel bancario" },
    { icon: "zap", label: "Pix e TED instantaneos" },
    { icon: "card", label: "Cartao internacional" },
  ];

  return (
    <section id="inicio" className="relative min-h-[100dvh] overflow-hidden flex flex-col">
      {/* ── Background images (crossfade) — C6/Inter style ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <Image
            src={asset(slide.image)}
            alt=""
            fill
            className="object-cover object-[center_30%] opacity-[0.55] saturate-[0.6] brightness-[0.85]"
            sizes="100vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays — layered premium style ── */}
      {/* Dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]" aria-hidden />
      {/* Left side content overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent lg:from-[#050505]/80 lg:via-[#050505]/30" aria-hidden />
      
      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-[#6336c4]/5 blur-[150px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-[#8e59ff]/5 blur-[120px]" aria-hidden />

      {/* ── Main Content ── */}
      <div className="relative z-[1] flex flex-1 flex-col justify-center mx-auto w-full max-w-7xl px-5 pt-28 pb-8 sm:px-8 sm:pt-36 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6336c4]/20 bg-[#6336c4]/10 px-4 py-1.5 text-xs font-medium text-[#c4b5fd] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8e59ff] animate-pulse" />
                Banco Digital Global
              </span>
            </motion.div>

            {/* Headline - with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.5rem]">
                  {slide.title1}
                  <span className="text-gradient-primary">{slide.titleHighlight}</span>
                  {slide.title2}
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-start gap-4"
            >
              <a
                href="#conta"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#6336c4] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#6336c4]/30 transition-all duration-300 hover:bg-[#7344d8] hover:shadow-[#6336c4]/40 sm:px-10 sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">{t.hero.cta1}</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:px-10 sm:text-base"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                {t.hero.cta2}
              </a>
            </motion.div>

            {/* Slide indicators */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-3"
            >
              {slides.map((_: unknown, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative h-1 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-10 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right: Features Grid - C6 Bank style */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6336c4]/20">
                  {feature.icon === "globe" && (
                    <svg className="h-6 w-6 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  )}
                  {feature.icon === "shield" && (
                    <svg className="h-6 w-6 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                  {feature.icon === "zap" && (
                    <svg className="h-6 w-6 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )}
                  {feature.icon === "card" && (
                    <svg className="h-6 w-6 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm font-medium text-white">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Features - horizontal scroll */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:hidden"
        >
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none -mx-5 px-5">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex-shrink-0 glass-card rounded-xl px-4 py-3 flex items-center gap-3 min-w-[180px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6336c4]/20">
                  {feature.icon === "globe" && (
                    <svg className="h-4 w-4 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  )}
                  {feature.icon === "shield" && (
                    <svg className="h-4 w-4 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                  {feature.icon === "zap" && (
                    <svg className="h-4 w-4 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )}
                  {feature.icon === "card" && (
                    <svg className="h-4 w-4 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs font-medium text-white">{feature.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-neutral-600 uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-6 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-white/50"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export function MoedasLibertySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="solucoes" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-lifestyle.jpg")} alt="" fill className="object-cover opacity-[0.12] saturate-[0.5]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#6336c4]/5 blur-[200px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Currency grid */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[400px] lg:mx-0"
          >
            {/* Main currency grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { symbol: "R$", label: "Real", color: "from-green-500/20 to-green-600/10" },
                { symbol: "€", label: "Euro", color: "from-blue-500/20 to-blue-600/10" },
                { symbol: "$", label: "Dolar", color: "from-emerald-500/20 to-emerald-600/10" },
              ].map((c, i) => (
                <motion.div
                  key={c.symbol}
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br ${c.color} backdrop-blur-sm transition-all duration-500 hover:border-[#6336c4]/30 hover:scale-105`}
                >
                  <span className="text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-110">{c.symbol}</span>
                  <span className="mt-2 text-xs font-medium text-neutral-500">{c.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Exchange indicator */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-5 flex items-center justify-center gap-3"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#6336c4]/30 to-[#6336c4]/30" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6336c4]/20 bg-[#6336c4]/10 animate-glow-pulse">
                <svg className="h-5 w-5 text-[#c4b5fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#6336c4]/30 to-[#6336c4]/30" />
            </motion.div>

            {/* Second row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { symbol: "£", label: "Libra", color: "from-red-500/20 to-red-600/10" },
                { symbol: "¥", label: "Iene", color: "from-rose-500/20 to-rose-600/10" },
                { symbol: "Fr", label: "Franco", color: "from-orange-500/20 to-orange-600/10" },
              ].map((c, i) => (
                <motion.div
                  key={c.symbol}
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className={`group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br ${c.color} backdrop-blur-sm transition-all duration-500 hover:border-[#6336c4]/30 hover:scale-105`}
                >
                  <span className="text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-110">{c.symbol}</span>
                  <span className="mt-2 text-xs font-medium text-neutral-500">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">Conversao Instantanea</span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.moedas.title1}
              <span className="text-gradient-primary">{t.moedas.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
              {t.moedas.desc}
            </p>
            
            {/* Features list */}
            <div className="mt-8 space-y-4">
              {[
                "Conversao em tempo real",
                "Melhores taxas do mercado",
                "Sem taxas ocultas",
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6336c4]/20">
                    <svg className="h-3.5 w-3.5 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {t.moedas.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-sm font-medium text-neutral-400 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#6336c4]/10 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
