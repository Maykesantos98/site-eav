"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

const numberMap: Record<string, string> = {
  "Regulamentação em dia": "01",
  "Privacidade é lei": "02",
  "Olhos que não piscam": "03",
  "Criptografia avançada": "04",
  "Só você entra": "05",
  "Nunca fora do ar": "06",
  "Regulation in check": "01",
  "Privacy is law": "02",
  "Eyes that don't blink": "03",
  "Advanced encryption": "04",
  "Only you get in": "05",
  "Never goes down": "06",
};

export function TrustSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="confianca" className="relative overflow-hidden py-32 sm:py-40">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-tech.jpg")}
          alt=""
          fill
          className="object-cover opacity-[0.08] saturate-[0.5] sm:opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/80 to-[#0c0a09]" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-[#6336c4]/6 blur-[150px]" aria-hidden />

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
          <span className="eav-section-label">{t.trust.label}</span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {t.trust.title1}<span className="eav-gradient-text">{t.trust.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-[1.7] text-stone-400">
            Cada camada de proteção existe para que você não precise se preocupar com nada.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-18 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {t.trust.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#6336c4]/25 hover:bg-[#6336c4]/[0.04] hover:shadow-xl hover:shadow-[#6336c4]/8"
            >
              {/* Number */}
              <span className="text-[11px] font-semibold tracking-[0.15em] text-[#6336c4]/40 transition-colors duration-300 group-hover:text-[#6336c4]/70">
                {numberMap[item.title] ?? `0${i + 1}`}
              </span>

              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.7] text-stone-400">
                {item.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-[#6336c4]/0 via-[#6336c4]/20 to-[#6336c4]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
