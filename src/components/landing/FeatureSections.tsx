"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";
import { useIsMobile } from "@/constants/useIsMobile";

/* ─── Data ─── */

const worldCardIcons = [
  "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M13 10V3L4 14h7v7l9-11h-7z",
];

/* ─── World Globe Section ─── */

export function WorldGlobeSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();
  const worldCards = t.globe.features.map((label, i) => ({ label, icon: worldCardIcons[i] }));
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-city.jpg")}
          alt=""
          fill
          className="object-cover object-center opacity-[0.05] sm:opacity-[0.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/60 to-[#0c0a09]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Globe + text side by side on desktop */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: globe */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 -m-10 rounded-full bg-[#6336c4]/12 blur-[80px] sm:-m-16 sm:blur-[100px]" aria-hidden />
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -12, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <EavRemoteImage
                src={eavImages.globo}
                alt="Globo e conexões internacionais"
                width={585}
                height={539}
                className="relative h-auto w-full max-w-[300px] object-contain drop-shadow-[0_0_80px_rgba(99,54,196,0.3)] sm:max-w-[420px] lg:max-w-[480px]"
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
              <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.globe.label}</span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                {t.globe.title1}<span className="eav-gradient-text">{t.globe.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
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
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 transition-colors hover:border-violet-500/15 hover:bg-violet-500/5 sm:p-3.5"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/10 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-violet-400 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-stone-300">{card.label}</span>
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
  return (
    <section id="seguranca" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background: tech network */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-tech.jpg")}
          alt=""
          fill
          className="object-cover object-center opacity-[0.06] sm:opacity-[0.09]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/90 via-[#0c0a09]/60 to-[#0c0a09]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/60 via-transparent to-[#0c0a09]/60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/8 via-transparent to-violet-950/5" aria-hidden />
      <div className="absolute inset-0 border-y border-white/[0.04]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[480px] lg:mx-0"
        >
          <div className="absolute inset-0 -m-6 rounded-full bg-[#8e59ff]/10 blur-[40px] sm:-m-12 sm:blur-[80px]" aria-hidden />
          <motion.div
            animate={reduce || isMobile ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <EavRemoteImage
              src={eavImages.olho}
              alt="Segurança e visão"
              width={585}
              height={539}
              className="relative h-auto w-full object-contain drop-shadow-[0_0_60px_rgba(142,89,255,0.2)]"
            />
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.security.label}</span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
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
                className="eav-card-glass group rounded-xl p-4 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-white">{item.text}</span>
                    <p className="mt-1 text-sm text-stone-500">{item.detail}</p>
                  </div>
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
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6336c4]/5 blur-[60px] sm:h-[400px] sm:w-[600px] sm:blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.speed.label}</span>
          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {t.speed.title1}<span className="eav-gradient-text">{t.speed.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-14 sm:gap-12 lg:gap-20">
          {circles.map((c, i) => (
            <motion.div
              key={c.alt}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={reduce ? {} : { scale: 1.1, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex w-[110px] sm:w-[150px] flex-col items-center gap-5 md:w-[180px]"
            >
              <div className="relative">
                <div className="absolute inset-0 -m-6 rounded-full bg-[#6336c4]/12 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />
                <motion.div
                  animate={reduce || isMobile ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <EavRemoteImage
                    src={c.src}
                    alt={c.alt}
                    width={321}
                    height={321}
                    className="relative h-auto w-full object-contain drop-shadow-[0_0_30px_rgba(99,54,196,0.15)]"
                  />
                </motion.div>
              </div>
              <span className="text-sm font-medium text-stone-400 transition-colors group-hover:text-violet-300">
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

export function BeyondFinanceSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background: chicara faded */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <EavRemoteImage
          src={eavImages.chicara}
          alt=""
          width={1200}
          height={1100}
          className="absolute -right-[20%] top-1/2 h-[80%] w-auto -translate-y-1/2 object-contain opacity-[0.03] sm:right-[-10%] sm:opacity-[0.04]"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0c0a09]/80 to-[#0c0a09]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.beyond.label}</span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              {t.beyond.title1}<span className="eav-gradient-text">{t.beyond.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-400 sm:text-lg">
              {t.beyond.desc}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {t.beyond.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-stone-300">
                  <svg className="h-4 w-4 flex-shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 -m-10 rounded-3xl bg-[#6336c4]/8 blur-[60px]" aria-hidden />
              <motion.div
                animate={reduce || isMobile ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <EavRemoteImage
                  src={eavImages.chicara}
                  alt="Experiência digital EAV Bank"
                  width={585}
                  height={539}
                  className="relative h-auto w-full max-w-full sm:max-w-[400px] lg:max-w-[500px] object-contain drop-shadow-[0_0_50px_rgba(99,54,196,0.2)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Company / B2B Section ─── */

const b2bIcons = [
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
];

export function CompanySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const b2bFeatures = t.company.features.map((feat, i) => ({ icon: b2bIcons[i], title: feat.title, desc: feat.desc }));
  return (
    <section
      id="empresas"
      className="relative py-16 sm:py-24"
    >
      <div className="absolute inset-0 border-y border-white/[0.04]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/5 via-transparent to-violet-950/5" aria-hidden />

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
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.company.label}</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {t.company.title1}<span className="eav-gradient-text">{t.company.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
            {t.company.desc}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" id="conta">
              {b2bFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3.5 transition-colors hover:border-violet-500/15 hover:bg-violet-500/5"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{feat.title}</div>
                    <p className="mt-0.5 text-xs text-stone-500">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Images — 3 columns, large */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
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
              className="overflow-hidden rounded-2xl transition-transform duration-300"
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
          className="mt-10 text-center"
        >
          <motion.a
            href="https://eav7.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 sm:px-8 sm:py-4 sm:text-base"
          >
            {t.company.cta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
