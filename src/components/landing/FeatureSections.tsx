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

/* Heroicons 20 solid — world/globe feature icons */
const worldCardIcons = [
  "M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z",
  "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145c.182-.1.422-.244.703-.433a13.07 13.07 0 002.196-1.886C15.11 14.78 16.5 12.37 16.5 9.5a6.5 6.5 0 00-13 0c0 2.87 1.39 5.28 2.986 6.958a13.07 13.07 0 002.196 1.886 8.25 8.25 0 00.985.578l.018.008.006.003zM10 11.25a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z",
  "M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46C8.363 14.45 9.404 15 10.5 15s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z",
  "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z",
  "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z",
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
          className="object-cover object-center opacity-[0.20] sm:opacity-[0.30] lg:opacity-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0a09]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/60 via-transparent to-[#0c0a09]/70" />
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
                    <svg className="h-5 w-5 text-violet-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d={card.icon} clipRule="evenodd" />
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

  /* Heroicons 20 solid — security icons */
  const securityIcons = [
    "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
    "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z",
    "M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z",
    "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z",
  ];

  return (
    <section id="seguranca" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#150a28] to-[#0c0a09]" aria-hidden />
      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[400px] rounded-full bg-[#8e59ff]/8 blur-[100px] sm:h-[400px] sm:w-[600px]" aria-hidden />
      {/* Glow lines */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8e59ff]/20 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/15 to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Left: Eye illustration with enhanced glow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[480px] lg:mx-0"
        >
          <div className="absolute inset-0 -m-8 rounded-full bg-[#8e59ff]/12 blur-[50px] sm:-m-14 sm:blur-[90px]" aria-hidden />
          <motion.div
            animate={reduce || isMobile ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <EavRemoteImage
              src={eavImages.olho}
              alt="Segurança e visão"
              width={585}
              height={539}
              className="relative h-auto w-full object-contain drop-shadow-[0_0_80px_rgba(142,89,255,0.25)]"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet-300 uppercase">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z" clipRule="evenodd" /></svg>
              {t.security.label}
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
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
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:scale-110">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d={securityIcons[i]} clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-white">{item.text}</span>
                  <p className="mt-1 text-sm text-stone-400">{item.detail}</p>
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
    <section className="eav-section-violet relative overflow-hidden py-20 sm:py-28">
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-abstract.jpg")} alt="" fill className="object-cover opacity-[0.20] sm:opacity-[0.30] lg:opacity-[0.35]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0c0a09]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e2e]/50 via-transparent to-[#0c0a09]/70" />
      </div>
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6336c4]/8 blur-[60px] sm:h-[400px] sm:w-[600px] sm:blur-[120px]" aria-hidden />

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
                  <svg className="h-4 w-4 flex-shrink-0 text-violet-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
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

/* Heroicons 20 solid — B2B feature icons */
const b2bIcons = [
  "M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4z",
  "M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5v1.19l1.72-.19a.75.75 0 01.166 1.49l-4.25.472a.75.75 0 01-.166-1.49l1.03-.114v-1.358H5.75A1.75 1.75 0 014 15.265V4.75z",
  "M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 7a3 3 0 100-6 3 3 0 000 6zM2 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012 3.75z",
  "M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46C8.363 14.45 9.404 15 10.5 15s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z",
  "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z",
  "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z",
];

export function CompanySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const b2bFeatures = t.company.features.map((feat, i) => ({ icon: b2bIcons[i], title: feat.title, desc: feat.desc }));
  return (
    <section
      id="empresas"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background: metropolis skyline — highly visible */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-metropolis.jpg")}
          alt=""
          fill
          className="object-cover object-[center_40%] opacity-[0.20] sm:opacity-[0.30] lg:opacity-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0a09]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/70 via-[#0c0a09]/40 to-[#0c0a09]/80" />
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
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.company.label}</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {t.company.title1}<span className="eav-gradient-text">{t.company.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
            {t.company.desc}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                    <svg className="h-4 w-4 text-violet-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d={feat.icon} clipRule="evenodd" />
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
