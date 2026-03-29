"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { publicAssets } from "@/constants/publicAssets";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { useIsMobile } from "@/constants/useIsMobile";
import { asset } from "@/constants/basePath";
import { Icon, type IconName } from "@/components/ui/Icon";

const benefitIconNames: IconName[] = [
  "credit-card",
  "globe",
  "bolt",
  "shield",
  "clock",
  "users",
];

export function CardsShowcase() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();

  const benefits = t.cards.benefits.map((text, i) => ({ iconName: benefitIconNames[i], text }));

  return (
    <section id="cartoes" className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* ── Premium deep background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#150a28] to-[#0c0a09]" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-premium-dark.jpg")} alt="" fill className="object-cover opacity-[0.20] mix-blend-overlay" sizes="100vw" />
      </div>
      {/* Purple glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[400px] rounded-full bg-[#6336c4]/12 blur-[100px] sm:h-[500px] sm:w-[700px] sm:blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[300px] rounded-full bg-[#b336c1]/8 blur-[80px] sm:h-[300px] sm:w-[400px]" aria-hidden />
      {/* Top/bottom glow lines */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8e59ff]/25 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/15 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── Hero: centered title (C6 Carbon style — big dramatic heading) ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-badge">
            <Icon name="credit-card" size="xs" />
            {t.cards.label}
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:tracking-[-0.025em]">
            {t.cards.title1}<span className="eav-gradient-text">{t.cards.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-stone-400 sm:text-lg">
            {t.cards.desc}
          </p>
        </motion.div>

        {/* ── Cards showcase: hero card centered (Nubank Ultravioleta style) ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 sm:mt-20"
        >
          <div className="relative mx-auto flex max-w-3xl items-center justify-center">
            {/* Back card — Graphene, subtle */}
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -6, 0], rotate: [-6, -5, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-[5%] top-[8%] z-[1] w-[65%] opacity-60 sm:w-[55%]"
            >
              <Image
                src={publicAssets.cardGraphene}
                alt="Cartão Graphene"
                width={840}
                height={530}
                className="h-auto w-full object-contain"
                style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.4))" }}
                sizes="(max-width: 640px) 200px, 400px"
              />
            </motion.div>

            {/* Hero card — EAV Bank, center, largest, brightest */}
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-[3] w-[75%] sm:w-[60%]"
            >
              {/* Glow behind hero card */}
              <div className="absolute inset-0 -m-8 rounded-3xl bg-[#8e59ff]/15 blur-[50px] sm:-m-12 sm:blur-[80px]" aria-hidden />
              <Image
                src={publicAssets.cardEav}
                alt="Cartão EAV Bank"
                width={840}
                height={530}
                className="relative h-auto w-full object-contain"
                style={{ filter: "drop-shadow(0 16px 32px rgba(99,54,196,0.35))" }}
                sizes="(max-width: 640px) 260px, 500px"
                priority
              />
            </motion.div>

            {/* Front card — Grabtium, overlapping right */}
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -8, 0], rotate: [5, 6, 5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-[5%] top-[8%] z-[2] w-[65%] opacity-60 sm:w-[55%]"
            >
              <Image
                src={publicAssets.cardGrabtium}
                alt="Cartão Grabtium"
                width={840}
                height={530}
                className="h-auto w-full object-contain"
                style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.4))" }}
                sizes="(max-width: 640px) 200px, 400px"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Benefits grid (below cards — clean, premium) ── */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group flex items-start gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-250 hover:border-violet-500/20 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-950/10"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:scale-105">
                <Icon name={b.iconName} size="md" />
              </div>
              <span className="text-sm font-medium leading-snug text-stone-300 transition-colors duration-200 group-hover:text-white">{b.text}</span>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-12 text-center sm:mt-14"
        >
          <motion.a
            href="#conta"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="eav-btn-primary px-8 py-4 text-base"
          >
            {t.cards.cta}
            <Icon name="arrow-right" size="sm" className="stroke-[2]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
