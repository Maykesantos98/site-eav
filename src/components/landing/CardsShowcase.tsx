"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { publicAssets } from "@/constants/publicAssets";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

const cardImages: Record<string, string> = {
  graphene: publicAssets.cardGraphene,
  eav: publicAssets.cardEav,
  grabtium: publicAssets.cardGrabtium,
};

const cardColors: Record<string, { glow: string; gradient: string; border: string }> = {
  graphene: {
    glow: "rgba(100,100,140,0.25)",
    gradient: "from-neutral-500/20 to-neutral-600/10",
    border: "border-neutral-500/20",
  },
  eav: {
    glow: "rgba(99,54,196,0.35)",
    gradient: "from-[#6336c4]/20 to-[#8e59ff]/10",
    border: "border-[#6336c4]/30",
  },
  grabtium: {
    glow: "rgba(142,89,255,0.3)",
    gradient: "from-[#8e59ff]/20 to-[#b336c1]/10",
    border: "border-[#8e59ff]/20",
  },
};

// 3D Tilt Card Component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CardsShowcase() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [activeCard, setActiveCard] = useState<string>("eav");

  const tiers = t.cards.tiers;
  const activeTier = tiers.find((tier: { id: string }) => tier.id === activeCard) || tiers[1];
  const colors = cardColors[activeCard] || cardColors.eav;

  return (
    <section id="cartoes" className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-premium-dark.jpg")} alt="" fill className="object-cover opacity-[0.06] saturate-[0.2]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
      </div>

      {/* Animated glow based on active card */}
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-[200px]"
        animate={{ backgroundColor: colors.glow }}
        transition={{ duration: 0.8 }}
        aria-hidden
      />

      {/* Section lines */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.cards.label}</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t.cards.title1}
            <span className="text-gradient-primary">{t.cards.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {t.cards.desc}
          </p>
        </motion.div>

        {/* Card selector tabs - horizontal scroll on mobile */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.05] bg-[#0a0a0a]/80 p-1.5 backdrop-blur-sm">
            {tiers.map((tier: { id: string; name: string }) => (
              <button
                key={tier.id}
                onClick={() => setActiveCard(tier.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCard === tier.id
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {activeCard === tier.id && (
                  <motion.div
                    layoutId="cardTabIndicator"
                    className="absolute inset-0 rounded-full bg-[#6336c4]/20 border border-[#6336c4]/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tier.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main showcase area */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Card 3D display */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <TiltCard className="relative perspective-1000">
              {/* Glow ring */}
              <div
                className="absolute inset-0 -m-4 rounded-3xl blur-[40px] transition-all duration-700"
                style={{ backgroundColor: colors.glow }}
              />

              {/* Card image container */}
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-[400px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {cardImages[activeCard] && (
                  <Image
                    src={cardImages[activeCard]}
                    alt={activeTier.name}
                    width={840}
                    height={530}
                    className="relative h-auto w-full object-contain"
                    style={{
                      filter: `drop-shadow(0 30px 60px ${colors.glow})`,
                      transform: "translateZ(50px)",
                    }}
                    sizes="(max-width: 768px) 90vw, 40vw"
                    priority
                  />
                )}

                {/* Floating chip indicator */}
                <motion.div
                  className="absolute -top-4 -right-4 flex items-center gap-2 rounded-full bg-[#0a0a0a]/90 border border-white/10 px-3 py-1.5 backdrop-blur-sm"
                  style={{ transform: "translateZ(80px)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-neutral-300">Ativo</span>
                </motion.div>
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Card details */}
          <motion.div
            key={activeCard}
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            {/* Card tier badge */}
            {activeTier.popular && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#6336c4]/10 border border-[#6336c4]/20 px-4 py-1.5 text-xs font-semibold text-[#c4b5fd] mb-4">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Mais popular
              </span>
            )}

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 mb-2">
              {activeTier.tagline}
            </p>

            <h3 className="text-3xl font-bold text-white sm:text-4xl">{activeTier.name}</h3>

            {/* Benefits list */}
            {"comingSoon" in activeTier && activeTier.comingSoon ? (
              <div className="mt-8 rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02] py-12 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#6336c4]/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-neutral-300">Em breve</p>
                <p className="mt-1 text-sm text-neutral-600">Beneficios exclusivos a caminho</p>
              </div>
            ) : (
              <ul className="mt-8 space-y-4">
                {activeTier.benefits.map((benefit: string, i: number) => (
                  <motion.li
                    key={benefit}
                    initial={reduce ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-[#6336c4]/20 flex items-center justify-center">
                      <svg className="h-3 w-3 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#conta"
                className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 ${
                  "comingSoon" in activeTier && activeTier.comingSoon
                    ? "bg-white/[0.02] border border-white/[0.05] text-neutral-600 cursor-not-allowed"
                    : "bg-[#6336c4] text-white shadow-xl shadow-[#6336c4]/25 hover:bg-[#7344d8] hover:shadow-[#6336c4]/35"
                }`}
                {...("comingSoon" in activeTier && activeTier.comingSoon
                  ? { "aria-disabled": true, tabIndex: -1, onClick: (e: React.MouseEvent) => e.preventDefault() }
                  : {})}
              >
                {"comingSoon" in activeTier && activeTier.comingSoon ? (
                  "Em breve"
                ) : (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative">{t.cards.cta}</span>
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
              </a>

              <a
                href="#comparar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-4 text-sm font-medium text-neutral-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] hover:text-white"
              >
                Comparar cartoes
              </a>
            </div>
          </motion.div>
        </div>

        {/* Card comparison mini-grid */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid gap-4 sm:grid-cols-3"
        >
          {tiers.map((tier: { id: string; name: string; tagline: string; popular?: boolean }, i: number) => {
            const tierColors = cardColors[tier.id] || cardColors.eav;
            const isActive = activeCard === tier.id;

            return (
              <button
                key={tier.id}
                onClick={() => setActiveCard(tier.id)}
                className={`group relative rounded-2xl border p-6 text-left transition-all duration-500 ${
                  isActive
                    ? `${tierColors.border} bg-gradient-to-br ${tierColors.gradient}`
                    : "border-white/[0.05] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 right-4 rounded-full bg-[#6336c4] px-3 py-1 text-[10px] font-bold text-white">
                    Popular
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {cardImages[tier.id] && (
                    <div className="relative w-20 h-14 flex-shrink-0">
                      <Image
                        src={cardImages[tier.id]}
                        alt={tier.name}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-white">{tier.name}</h4>
                    <p className="text-xs text-neutral-500">{tier.tagline}</p>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="cardSelectIndicator"
                    className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-[#6336c4] flex items-center justify-center"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  >
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
