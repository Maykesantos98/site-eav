"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

const iconMap: Record<number, JSX.Element> = {
  0: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  1: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  2: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  3: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  4: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
    </svg>
  ),
  5: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export function TrustSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="confianca" className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-tech.jpg")}
          alt=""
          fill
          className="object-cover opacity-[0.06] saturate-[0.3]"
          sizes="100vw"
        />
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-[#6336c4]/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[#8e59ff]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.trust.label}</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.trust.title1}
            <span className="text-gradient-primary">{t.trust.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Cada camada de protecao existe para que voce nao precise se preocupar com nada.
          </p>
        </motion.div>

        {/* Trust grid - bento style */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.trust.items.map((item: { title: string; desc: string }, i: number) => (
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-6 transition-all duration-500 hover:border-[#6336c4]/20 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6336c4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon and number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-[#6336c4]/10 flex items-center justify-center text-[#8e59ff] transition-all duration-300 group-hover:bg-[#6336c4]/20 group-hover:scale-110">
                    {iconMap[i] || iconMap[0]}
                  </div>
                  <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-500 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{item.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#6336c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges marquee */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-white/[0.05]"
        >
          <p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8">
            Parceiros e certificacoes
          </p>
          
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            
            {/* Marquee */}
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-12 px-6">
                  {[
                    "Banco Central",
                    "PCI DSS",
                    "ISO 27001",
                    "VISA",
                    "Mastercard",
                    "Apple Pay",
                    "Google Pay",
                  ].map((partner) => (
                    <span
                      key={`${setIndex}-${partner}`}
                      className="whitespace-nowrap text-lg font-semibold text-neutral-700 hover:text-neutral-500 transition-colors cursor-default"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
