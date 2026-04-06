"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

/* ─── World Globe Section - Bento Grid Style ─── */

export function WorldGlobeSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-city.jpg")} alt="" fill className="object-cover opacity-[0.08] saturate-[0.4]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#6336c4]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.globe.label}</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.globe.title1}
            <span className="text-gradient-primary">{t.globe.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {t.globe.desc}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {/* Main globe card - spans 7 columns and 2 rows */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-7 lg:row-span-2 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-6 sm:p-8 overflow-hidden min-h-[400px] lg:min-h-0"
          >
            {/* Glow effect inside card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#6336c4]/10 blur-[100px]" />
            
            {/* Globe image */}
            <div className="relative flex items-center justify-center h-full">
              <motion.div
                animate={reduce ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <EavRemoteImage
                  src={eavImages.globo}
                  alt="Globo e conexoes internacionais"
                  width={585}
                  height={539}
                  className="relative h-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] object-contain drop-shadow-[0_0_80px_rgba(99,54,196,0.3)]"
                />
              </motion.div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-[#0a0a0a]/80 border border-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-300">150+ paises</span>
            </div>
          </motion.div>

          {/* Feature cards - right column */}
          {t.globe.features.slice(0, 4).map((label: string, i: number) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group lg:col-span-5 rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-[#6336c4]/20 hover:bg-[#0a0a0a]/80"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#6336c4]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#6336c4]/20 group-hover:scale-110">
                  <svg className="h-5 w-5 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />}
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Security Section - Modern Layout ─── */

export function SecuritySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="seguranca" className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-abstract.jpg")} alt="" fill className="object-cover opacity-[0.05] saturate-[0.3]" sizes="100vw" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8e59ff]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 -m-8 rounded-full bg-[#6336c4]/10 blur-[60px]" />
              
              <motion.div
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <EavRemoteImage
                  src={eavImages.olho}
                  alt="Seguranca e visao"
                  width={585}
                  height={539}
                  className="relative h-auto w-full max-w-[400px] object-contain drop-shadow-[0_0_80px_rgba(142,89,255,0.25)]"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl bg-[#0a0a0a]/90 border border-[#6336c4]/20 px-4 py-3 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">100% Seguro</p>
                  <p className="text-[10px] text-neutral-500">Certificado PCI DSS</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:order-1">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.security.label}</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t.security.title1}
                <span className="text-gradient-primary">{t.security.titleHighlight}</span>
                {t.security.title2}
              </h2>
            </motion.div>

            {/* Security features */}
            <div className="mt-10 space-y-4">
              {t.security.items.map((item: { text: string; detail: string }, i: number) => (
                <motion.div
                  key={item.text}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-[#6336c4]/20"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6336c4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#6336c4]/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />}
                        {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />}
                        {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.text}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Speed Circles Section - Modernized ─── */

export function SpeedCirclesSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  
  const circles = [
    { src: eavImages.circleTransacoes, alt: "Transacoes", label: t.speed.circles[0], value: "10M+", desc: "por mes" },
    { src: eavImages.circleVelocidade, alt: "Velocidade", label: t.speed.circles[1], value: "3s", desc: "em media" },
    { src: eavImages.circleDisponibilidade, alt: "Disponibilidade", label: t.speed.circles[2], value: "99.9%", desc: "uptime" },
  ] as const;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-abstract.jpg")} alt="" fill className="object-cover opacity-[0.08] saturate-[0.4]" sizes="100vw" />
      </div>

      {/* Center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#6336c4]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.speed.label}</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.speed.title1}
            <span className="text-gradient-primary">{t.speed.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Circles grid */}
        <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
          {circles.map((c, i) => (
            <motion.div
              key={c.alt}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative rounded-3xl border border-white/[0.05] bg-[#0a0a0a] p-6 sm:p-8 text-center transition-all duration-500 hover:border-[#6336c4]/20">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#6336c4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Circle image */}
                <motion.div
                  animate={reduce ? {} : { y: [0, -8, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 -m-4 rounded-full bg-[#6336c4]/10 opacity-0 blur-[30px] transition-opacity duration-500 group-hover:opacity-100" />
                  <EavRemoteImage
                    src={c.src}
                    alt={c.alt}
                    width={321}
                    height={321}
                    className="relative h-auto w-full max-w-[160px] mx-auto object-contain drop-shadow-[0_0_30px_rgba(99,54,196,0.15)]"
                  />
                </motion.div>

                {/* Value */}
                <div className="text-4xl font-bold text-white mb-1">{c.value}</div>
                <p className="text-xs text-neutral-500 mb-4">{c.desc}</p>

                {/* Label */}
                <h3 className="text-base font-semibold text-neutral-300 group-hover:text-white transition-colors">
                  {c.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Company / B2B Section - Premium Style ─── */

export function CompanySection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="empresas" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-metropolis.jpg")}
          alt=""
          fill
          className="object-cover opacity-[0.1] saturate-[0.4]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#6336c4]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.company.label}</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.company.title1}
            <span className="text-gradient-primary">{t.company.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {t.company.desc}
          </p>
        </motion.div>

        {/* Features bento grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {t.company.features.map((feat: { title: string; desc: string }, i: number) => (
            <motion.div
              key={feat.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-[#6336c4]/20"
            >
              <div className="h-10 w-10 rounded-xl bg-[#6336c4]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#6336c4]/20 group-hover:scale-110">
                <svg className="h-5 w-5 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />}
                  {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />}
                  {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />}
                  {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />}
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{feat.title}</h3>
              <p className="text-xs leading-relaxed text-neutral-500">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product showcase grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { src: eavImages.footer1, alt: "Seu proprio sistema de pagamentos" },
            { src: eavImages.footer2, alt: "Maquininha no celular" },
            { src: eavImages.pixBox, alt: "Pix gratuito e ilimitado" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0a0a0a] transition-all duration-500 hover:border-[#6336c4]/20"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6336c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <EavRemoteImage 
                src={img.src} 
                alt={img.alt} 
                width={400} 
                height={553} 
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/80 border border-white/10 px-3 py-1.5 backdrop-blur-sm text-xs font-medium text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://eav7.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#6336c4] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#6336c4]/25 transition-all duration-300 hover:bg-[#7344d8] hover:shadow-[#6336c4]/35"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">{t.company.cta}</span>
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
