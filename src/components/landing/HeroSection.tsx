"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";
import { useIsMobile } from "@/constants/useIsMobile";

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

  return (
    <section id="inicio" className="relative min-h-[100dvh] overflow-hidden flex flex-col justify-center">
      {/* ── Background images (crossfade) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <Image
            src={asset(slide.image)}
            alt=""
            fill
            className="object-cover object-[center_30%] opacity-[0.70] sm:opacity-[0.85] lg:opacity-100"
            sizes="100vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays (always visible) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c0a09]/80 via-[#0c0a09]/40 to-transparent lg:from-[#0c0a09]/70 lg:via-[#0c0a09]/25" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0a09]/20 via-transparent to-[#0c0a09]/70" aria-hidden />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[200px] w-[200px] rounded-full bg-[#6336c4]/10 blur-[50px] eav-hero-glow sm:h-[400px] sm:w-[500px] sm:blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[150px] w-[150px] rounded-full bg-[#b336c1]/8 blur-[60px] eav-hero-glow sm:h-[300px] sm:w-[400px] sm:blur-[100px]" aria-hidden />

      {/* ── Content ── */}
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-2xl">
          {/* Slide text (crossfade) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
                {slide.title1}
                <span className="eav-gradient-text">{slide.titleHighlight}</span>
                {slide.title2}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs (always visible) */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-3 sm:gap-4">
            <motion.a
              href="#conta"
              whileHover={reduce ? {} : { scale: 1.03 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-950/50 transition-shadow hover:shadow-violet-900/60 sm:px-9 sm:py-4 sm:text-base"
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
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-stone-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-8 sm:py-4 sm:text-base"
            >
              {t.hero.cta2}
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-stone-500 sm:mt-10 sm:gap-6">
            {[
              { label: t.hero.trust1, icon: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1z" },
              { label: t.hero.trust2, icon: "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z" },
              { label: t.hero.trust3, icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-emerald-500/80" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                </svg>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Slide indicators ── */}
        <div className="mt-10 flex items-center gap-2 sm:mt-12">
          {slides.map((_: unknown, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-gradient-to-r from-[#6336c4] to-[#8e59ff]"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
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
    <section id="solucoes" className="eav-section-violet relative py-16 sm:py-24 overflow-hidden">
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-lifestyle.jpg")} alt="" fill className="object-cover opacity-[0.20] sm:opacity-[0.30] lg:opacity-[0.35]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0c0a09]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e2e]/60 via-transparent to-[#0c0a09]/80" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
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
      </div>
    </section>
  );
}
