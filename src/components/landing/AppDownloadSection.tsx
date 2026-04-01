"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { fadeUp } from "./motion";
import Image from "next/image";
import { useLang } from "@/constants/LangContext";
import { useIsMobile } from "@/constants/useIsMobile";
import { asset } from "@/constants/basePath";

export function AppDownloadSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();

  return (
    <section id="app" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-lifestyle.jpg")} alt="" fill className="object-cover opacity-[0.06] saturate-[0.4] sm:opacity-[0.1]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/85 to-[#0c0a09]" />
      </div>
      <div className="absolute inset-0 border-y border-white/[0.04]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="eav-section-label">{t.app.label}</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            {t.app.title1}<span className="eav-gradient-text">{t.app.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-stone-400 sm:text-lg">{t.app.desc}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {t.app.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-sm text-stone-300">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6336c4]/50" />
                {feat}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all hover:border-white/20 hover:bg-white/[0.06] sm:justify-start sm:gap-3 sm:px-5"
            >
              <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-[11px] text-stone-500 leading-tight">{t.app.availableOn1}</div>
                <div className="text-xs font-bold text-white leading-tight sm:text-sm">{t.app.appStore}</div>
              </div>
            </a>
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all hover:border-white/20 hover:bg-white/[0.06] sm:justify-start sm:gap-3 sm:px-5"
            >
              <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" />
              </svg>
              <div>
                <div className="text-[11px] text-stone-500 leading-tight">{t.app.availableOn2}</div>
                <div className="text-xs font-bold text-white leading-tight sm:text-sm">{t.app.googlePlay}</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <EavRemoteImage
                src={eavImages.iphone}
                alt="App EAV Bank no iPhone"
                width={694}
                height={753}
                className="relative h-auto w-full max-w-[260px] object-contain drop-shadow-[0_30px_80px_rgba(99,54,196,0.35)] sm:max-w-[320px] lg:max-w-[380px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
