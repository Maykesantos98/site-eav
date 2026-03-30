"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { publicAssets } from "@/constants/publicAssets";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { Icon } from "@/components/ui/Icon";

/* Card images mapped by tier id */
const cardImages: Record<string, string> = {
  graphene: publicAssets.cardGraphene,
  eav: publicAssets.cardEav,
  grabtium: publicAssets.cardGrabtium,
};

/* Card glow colors */
const cardGlow: Record<string, string> = {
  graphene: "rgba(100,100,140,0.18)",
  eav: "rgba(99,54,196,0.3)",
  grabtium: "rgba(142,89,255,0.22)",
};

export function CardsShowcase() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const tiers = t.cards.tiers;

  return (
    <section id="cartoes" className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* ── Premium deep background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#150a28] to-[#0c0a09]" aria-hidden />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[400px] rounded-full bg-[#6336c4]/12 blur-[100px] sm:h-[500px] sm:w-[700px] sm:blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[300px] rounded-full bg-[#b336c1]/8 blur-[80px] sm:h-[300px] sm:w-[400px]" aria-hidden />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8e59ff]/25 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/15 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Header ── */}
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

        {/* ── Cards Grid ── */}
        <div className="mx-auto mt-14 grid max-w-7xl items-start gap-6 sm:mt-20 md:grid-cols-3 lg:gap-10">
          {tiers.map((tier, i) => {
            const glow = cardGlow[tier.id] ?? cardGlow.eav;
            const isHovered = hoveredCard === tier.id;
            const image = cardImages[tier.id];
            const comingSoon = "comingSoon" in tier && tier.comingSoon;

            return (
              <motion.div
                key={tier.id}
                initial={reduce ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-500 backdrop-blur-sm ${
                  tier.popular
                    ? "border-[#8e59ff]/40 bg-white/[0.04] shadow-2xl shadow-[#6336c4]/10 md:scale-[1.03] z-10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
                }`}
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-5 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#6336c4]/40">
                    {tier.tagline}
                  </div>
                )}

                {/* Tagline */}
                <p className={`mb-6 text-xs font-medium uppercase tracking-[0.15em] text-stone-500 ${tier.popular ? "mt-2" : ""}`}>
                  {tier.tagline}
                </p>

                {/* ── Card Image — large, horizontal ── */}
                <motion.div
                  animate={
                    reduce
                      ? {}
                      : isHovered
                        ? { scale: 1.05, rotate: -2 }
                        : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-8"
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 -m-3 rounded-3xl blur-[30px] transition-opacity duration-500"
                    style={{ backgroundColor: glow, opacity: isHovered ? 0.8 : 0.3 }}
                    aria-hidden
                  />
                  {image && (
                    <Image
                      src={image}
                      alt={tier.name}
                      width={840}
                      height={530}
                      className="relative h-auto w-full object-contain"
                      style={{ filter: `drop-shadow(0 16px 32px ${glow})` }}
                      sizes="(max-width: 768px) 90vw, 30vw"
                      priority={tier.popular}
                    />
                  )}
                </motion.div>

                {/* Card Name */}
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                  {tier.name}
                </h3>

                {/* Benefits or Coming Soon */}
                {comingSoon ? (
                  <div className="mb-8 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01] py-10">
                    <div className="text-center">
                      <Icon name="clock" size="lg" className="mx-auto mb-3 text-stone-500" />
                      <p className="text-sm font-semibold text-stone-400">Em breve</p>
                      <p className="mt-1 text-xs text-stone-600">Benefícios exclusivos a caminho</p>
                    </div>
                  </div>
                ) : (
                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-stone-400">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8e59ff]/10 mt-0.5">
                          <Icon name="check" size="xs" className="text-[#8e59ff]" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <motion.a
                  href="#conta"
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  whileTap={reduce ? {} : { scale: 0.97 }}
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
                    comingSoon
                      ? "cursor-default border border-white/[0.06] bg-white/[0.02] text-stone-500"
                      : tier.popular
                        ? "eav-btn-primary shadow-lg shadow-[#6336c4]/30 hover:shadow-[#6336c4]/50"
                        : "border border-white/10 bg-white/[0.03] text-white hover:border-[#8e59ff]/30 hover:bg-white/[0.06]"
                  }`}
                  {...(comingSoon ? { "aria-disabled": true, tabIndex: -1 } : {})}
                >
                  {comingSoon ? tier.tagline : t.cards.cta}
                  {!comingSoon && <Icon name="arrow-right" size="sm" className="stroke-[2]" />}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
