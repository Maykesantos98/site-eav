"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";
import { useIsMobile } from "@/constants/useIsMobile";
import { Icon, type IconName } from "@/components/ui/Icon";

/* ─── Data ─── */

/* World/globe feature icons — using unified Icon system */
const worldCardIconNames: IconName[] = [
  "credit-card",
  "map-pin",
  "banknotes",
  "shield",
  "bolt",
];

/* ─── World Globe Section ─── */

export function WorldGlobeSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();
  const worldCards = t.globe.features.map((label, i) => ({ label, iconName: worldCardIconNames[i] }));
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Background — desaturated city, strong overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-city.jpg")}
          alt=""
          fill
          className="object-cover object-center opacity-[0.20] saturate-[0.65] sm:opacity-[0.28] lg:opacity-[0.35]"
          sizes="100vw"
        />
        <div className="eav-bg-overlay-dark" />
        <div className="eav-bg-overlay-gradient" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: globe */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 -m-10 rounded-full bg-[#6336c4]/10 blur-[80px] sm:-m-16 sm:blur-[100px]" aria-hidden />
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -12, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <EavRemoteImage
                src={eavImages.globo}
                alt="Globo e conexões internacionais"
                width={585}
                height={539}
                className="relative h-auto w-full max-w-[280px] object-contain drop-shadow-[0_0_80px_rgba(99,54,196,0.25)] sm:max-w-[400px] lg:max-w-[460px]"
              />
            </motion.div>
          </motion.div>

          {/* Right: text + features */}
          <div>
            <motion.div
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="eav-section-label">{t.globe.label}</span>
              <h2 className="mt-4 text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-[-0.02em]">
                {t.globe.title1}<span className="eav-gradient-text">{t.globe.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm leading-[1.75] text-stone-400 sm:text-base">
                {t.globe.desc}
              </p>
            </motion.div>

            <div className="mt-8 space-y-3 sm:mt-10">
              {worldCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="eav-feature-card"
                >
                  <div className="eav-icon-box eav-icon-box-md">
                    <Icon name={card.iconName} size="md" className="text-violet-400" />
                  </div>
                  <span className="text-sm font-medium leading-snug text-stone-300">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Security Section ─── */

export function SecuritySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();

  const securityIconNames: IconName[] = ["lock", "shield", "cpu-chip", "bolt"];

  return (
    <section id="seguranca" className="relative overflow-hidden py-28 sm:py-36">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#150a28] to-[#0c0a09]" aria-hidden />
      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[250px] w-[350px] rounded-full bg-[#8e59ff]/6 blur-[100px] sm:h-[400px] sm:w-[600px]" aria-hidden />
      {/* Glow lines */}
      <div className="eav-section-line-top" aria-hidden />
      <div className="eav-section-line-bottom" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Left: Eye illustration */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[480px] lg:mx-0"
        >
          <div className="absolute inset-0 -m-8 rounded-full bg-[#8e59ff]/10 blur-[50px] sm:-m-14 sm:blur-[90px]" aria-hidden />
          <motion.div
            animate={reduce || isMobile ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <EavRemoteImage
              src={eavImages.olho}
              alt="Segurança e visão"
              width={585}
              height={539}
              className="relative h-auto w-full object-contain drop-shadow-[0_0_80px_rgba(142,89,255,0.2)]"
            />
          </motion.div>
        </motion.div>

        {/* Right: text + premium cards */}
        <div>
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="eav-badge">
              <Icon name="shield" size="xs" />
              {t.security.label}
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-[-0.02em]">
              {t.security.title1}<span className="eav-gradient-text">{t.security.titleHighlight}</span>{t.security.title2}
            </h2>
          </motion.div>

          <div className="mt-10 space-y-4">
            {t.security.items.map((item, i) => (
              <motion.div
                key={item.text}
                initial={reduce ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                whileHover={reduce ? {} : { x: 4 }}
                className="group eav-feature-card p-5"
              >
                <div className="eav-icon-box eav-icon-box-md text-violet-400">
                  <Icon name={securityIconNames[i]} size="md" />
                </div>
                <div>
                  <span className="font-semibold text-white">{item.text}</span>
                  <p className="mt-1.5 text-sm leading-[1.6] text-stone-400">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Speed Circles Section ─── */

export function SpeedCirclesSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();
  const circles = [
    { src: eavImages.circleTransacoes, alt: "Transações", label: t.speed.circles[0] },
    { src: eavImages.circleVelocidade, alt: "Velocidade", label: t.speed.circles[1] },
    { src: eavImages.circleDisponibilidade, alt: "Disponibilidade", label: t.speed.circles[2] },
  ] as const;

  return (
    <section className="eav-section-violet relative overflow-hidden py-28 sm:py-36">
      {/* Background photo — heavily desaturated */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-abstract.jpg")} alt="" fill className="object-cover opacity-[0.18] saturate-[0.6] sm:opacity-[0.25] lg:opacity-[0.32]" sizes="100vw" />
        <div className="eav-bg-overlay-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e2e]/50 via-transparent to-[#0c0a09]/70" />
      </div>
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[200px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6336c4]/6 blur-[60px] sm:h-[350px] sm:w-[500px] sm:blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-section-label">{t.speed.label}</span>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-[-0.02em]">
            {t.speed.title1}<span className="eav-gradient-text">{t.speed.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:mt-16 sm:gap-14 lg:gap-24">
          {circles.map((c, i) => (
            <motion.div
              key={c.alt}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={reduce ? {} : { scale: 1.08, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex w-[110px] sm:w-[150px] flex-col items-center gap-5 md:w-[180px]"
            >
              <div className="relative">
                <div className="absolute inset-0 -m-6 rounded-full bg-[#6336c4]/10 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />
                <motion.div
                  animate={reduce || isMobile ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <EavRemoteImage
                    src={c.src}
                    alt={c.alt}
                    width={321}
                    height={321}
                    className="relative h-auto w-full object-contain drop-shadow-[0_0_30px_rgba(99,54,196,0.12)]"
                  />
                </motion.div>
              </div>
              <span className="text-sm font-medium tracking-wide text-stone-400 transition-colors duration-200 group-hover:text-violet-300">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Beyond Finance Section ─── */

/* BeyondFinanceSection removed — replaced by ProductsSection */

/* ─── Company / B2B Section ─── */

const b2bIconNames: (IconName | "PIX_ICON")[] = [
  "building",
  "users",
  "document",
  "banknotes",
  "PIX_ICON",
  "shield",
];

export function CompanySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const b2bFeatures = t.company.features.map((feat, i) => ({ iconName: b2bIconNames[i], title: feat.title, desc: feat.desc }));
  return (
    <section id="empresas" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background: metropolis — desaturated, heavy overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-metropolis.jpg")}
          alt=""
          fill
          className="object-cover object-[center_40%] opacity-[0.18] saturate-[0.6] sm:opacity-[0.26] lg:opacity-[0.32]"
          sizes="100vw"
        />
        <div className="eav-bg-overlay-dark" />
        <div className="eav-bg-overlay-gradient" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-section-label">{t.company.label}</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-[-0.02em]">
            {t.company.title1}<span className="eav-gradient-text">{t.company.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.75] text-stone-400 sm:text-base">
            {t.company.desc}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {b2bFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group eav-feature-card"
            >
              <div className="eav-icon-box eav-icon-box-sm">
                {feat.iconName === "PIX_ICON" ? (
                  <Image src={asset("/images/pix sem fundo.png")} alt="Pix" width={20} height={20} className="h-5 w-5 object-contain" />
                ) : (
                  <Icon name={feat.iconName as IconName} size="sm" className="text-violet-400" />
                )}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{feat.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-stone-500">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Images — 3 columns */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            { src: eavImages.footer1, alt: "Seu próprio sistema de pagamentos" },
            { src: eavImages.footer2, alt: "Maquininha no celular" },
            { src: eavImages.pixBox, alt: "Pix gratuito e ilimitado" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={reduce ? {} : { y: -6 }}
              className="overflow-hidden rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-violet-500/15 hover:shadow-lg hover:shadow-violet-950/10"
            >
              <EavRemoteImage
                src={img.src}
                alt={img.alt}
                width={400}
                height={553}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://eav7.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="eav-btn-primary sm:px-8 sm:py-4 sm:text-base"
          >
            {t.company.cta}
            <Icon name="arrow-right" size="sm" className="stroke-[2]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
