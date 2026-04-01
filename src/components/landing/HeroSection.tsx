"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
      {/* ── Background images (crossfade) — desaturated for premium feel ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <Image
            src={asset(slide.image)}
            alt=""
            fill
            className="object-cover object-[center_30%] opacity-[0.70] saturate-[0.75] sm:opacity-[0.80] lg:opacity-[0.90]"
            sizes="100vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays — layered for depth and readability ── */}
      {/* Left-to-right gradient: dark on text side, transparent on right */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c0a09]/80 via-[#0c0a09]/35 to-transparent lg:from-[#0c0a09]/75 lg:via-[#0c0a09]/25 lg:to-transparent" aria-hidden />
      {/* Top-to-bottom: subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0a09]/20 via-transparent to-[#0c0a09]/70" aria-hidden />
      {/* Purple tint overlay for brand cohesion */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a0e2e]/10 via-transparent to-[#150a28]/10" aria-hidden />

      {/* Brand glow */}
      <div className="pointer-events-none absolute -top-32 left-[15%] h-[200px] w-[300px] rounded-full bg-[#6336c4]/8 blur-[80px] sm:h-[350px] sm:w-[500px] sm:blur-[140px]" aria-hidden />

      {/* ── Content ── */}
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-2xl">
          {/* Slide text (crossfade) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[2.25rem] font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] lg:leading-[1.02] lg:tracking-[-0.035em]">
                {slide.title1}
                <span className="eav-gradient-text">{slide.titleHighlight}</span>
                {slide.title2}
              </h1>
              <p className="mt-7 max-w-lg text-base leading-[1.7] text-stone-300 sm:text-lg sm:leading-[1.65]">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs (always visible) */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-start gap-3 sm:gap-4">
            <motion.a
              href="#conta"
              whileHover={reduce ? {} : { scale: 1.03 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#6336c4] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-2xl shadow-[#6336c4]/40 transition-all duration-250 hover:bg-[#7344d8] hover:shadow-[#6336c4]/50 sm:px-10 sm:py-4.5 sm:text-base"
            >
              {t.hero.cta1}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
            </motion.a>
            <motion.a
              href="#solucoes"
              whileHover={reduce ? {} : { scale: 1.02 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-250 hover:border-white/30 hover:bg-white/[0.06] sm:px-9 sm:py-4.5 sm:text-base"
            >
              {t.hero.cta2}
            </motion.a>
          </div>
        </div>

        {/* ── Slide indicators ── */}
        <div className="mt-12 flex items-center gap-2.5 sm:mt-14">
          {slides.map((_: unknown, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-white"
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
    <section id="solucoes" className="eav-section-violet relative py-28 sm:py-36 overflow-hidden">
      {/* Background photo — desaturated, strong overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-lifestyle.jpg")} alt="" fill className="object-cover opacity-[0.20] saturate-[0.65] sm:opacity-[0.28] lg:opacity-[0.35]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0c0a09]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e2e]/50 via-transparent to-[#0c0a09]/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:mx-0"
          >
            <motion.div
              animate={{}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Currency grid — fiat only */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { symbol: "R$", label: "Real" },
                  { symbol: "€", label: "Euro" },
                  { symbol: "$", label: "Dólar" },
                ].map((c) => (
                  <div key={c.symbol} className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#6336c4]/15 bg-[#6336c4]/[0.06] transition-all duration-300 hover:border-[#6336c4]/25 hover:bg-[#6336c4]/[0.1]">
                    <span className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{c.symbol}</span>
                    <span className="mt-1 text-[10px] font-medium text-stone-500">{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Exchange arrows */}
              <div className="my-3 flex items-center justify-center gap-2 sm:my-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#6336c4]/20" />
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6336c4]/20 bg-[#6336c4]/10">
                  <svg className="h-4 w-4 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#6336c4]/20" />
              </div>

              {/* Second row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { symbol: "£", label: "Libra" },
                  { symbol: "¥", label: "Iene" },
                  { symbol: "Fr", label: "Franco" },
                ].map((c) => (
                  <div key={c.symbol} className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#6336c4]/15 bg-[#6336c4]/[0.06] transition-all duration-300 hover:border-[#6336c4]/25 hover:bg-[#6336c4]/[0.1]">
                    <span className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{c.symbol}</span>
                    <span className="mt-1 text-[10px] font-medium text-stone-500">{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
              {t.moedas.title1}<span className="eav-gradient-text">{t.moedas.titleHighlight}</span>
            </h2>
            <p className="mt-5 text-sm leading-[1.75] text-stone-400 sm:text-base lg:text-lg lg:leading-[1.7]">
              {t.moedas.desc}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              {t.moedas.tags.map((tag) => (
                <span
                  key={tag}
                  className="eav-tag sm:px-4 sm:py-1.5 sm:text-sm"
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
