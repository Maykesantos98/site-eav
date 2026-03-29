"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { publicAssets } from "@/constants/publicAssets";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";

const benefitIcons = [
  "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
];

export function CardsShowcase() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  const benefits = t.cards.benefits.map((text, i) => ({ icon: benefitIcons[i], text }));

  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: benefits */}
          <div>
            <motion.div
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
                {t.cards.label}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                {t.cards.title1}<span className="eav-gradient-text">{t.cards.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base lg:text-lg">
                {t.cards.desc}
              </p>
            </motion.div>

            <div className="mt-8 space-y-3 sm:space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/10 sm:h-9 sm:w-9">
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                    </svg>
                  </div>
                  <span className="text-sm text-stone-300">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={benefits.length + 1}
              className="mt-8"
            >
              <motion.a
                href="#conta"
                whileHover={reduce ? {} : { scale: 1.03 }}
                whileTap={reduce ? {} : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 sm:px-7 sm:py-3.5 sm:text-base"
              >
                {t.cards.cta}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: animated cards — responsive stack */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative h-[340px] sm:h-[440px] w-full max-w-[280px] sm:max-w-[320px] md:h-[540px] md:max-w-[400px] lg:h-[620px] lg:max-w-[460px]">
              {/* Glow */}
              <div className="absolute inset-0 -m-6 rounded-full bg-[#6336c4]/10 blur-[60px] sm:-m-8 sm:blur-[80px]" aria-hidden />

              {/* Graphene — back, tilted left */}
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0], rotate: [-8, -7, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[2%] top-0 z-[1] w-[88%] sm:w-[90%]"
              >
                <Image
                  src={publicAssets.cardGraphene}
                  alt="Cartão Graphene"
                  width={840}
                  height={530}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0 12px 25px rgba(80,80,80,0.3))" }}
                  sizes="(max-width: 640px) 282px, (max-width: 1024px) 360px, 414px"
                />
              </motion.div>

              {/* EAV Bank — middle */}
              <motion.div
                animate={reduce ? {} : { y: [0, -12, 0], rotate: [3, 4, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute left-[6%] top-[24%] z-[2] w-[90%] sm:w-[92%]"
              >
                <Image
                  src={publicAssets.cardEav}
                  alt="Cartão EAV Bank"
                  width={840}
                  height={530}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0 16px 35px rgba(139,92,246,0.4))" }}
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 368px, 423px"
                />
              </motion.div>

              {/* Grabtium — front, tilted right */}
              <motion.div
                animate={reduce ? {} : { y: [0, -10, 0], rotate: [10, 9, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute left-[1%] top-[46%] z-[3] w-[86%] sm:w-[88%]"
              >
                <Image
                  src={publicAssets.cardGrabtium}
                  alt="Cartão Grabtium"
                  width={840}
                  height={530}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0 14px 30px rgba(100,50,180,0.35))" }}
                  sizes="(max-width: 640px) 275px, (max-width: 1024px) 352px, 405px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
