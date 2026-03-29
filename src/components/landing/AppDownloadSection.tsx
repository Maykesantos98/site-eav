"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { useIsMobile } from "@/constants/useIsMobile";
import { Icon } from "@/components/ui/Icon";

export function AppDownloadSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const isMobile = useIsMobile();

  return (
    <section id="app" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6336c4]/10 via-transparent to-[#8e59ff]/10" aria-hidden />
      <div className="absolute inset-0 border-y border-white/[0.04]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="eav-section-label">
            {t.app.label}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:tracking-[-0.025em]">
            {t.app.title1}<span className="eav-gradient-text">{t.app.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-stone-400 sm:text-lg">
            {t.app.desc}
          </p>

          {/* Features list */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {t.app.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-sm text-stone-300">
                <Icon name="check-circle" size="sm" className="flex-shrink-0 text-violet-400" />
                {feat}
              </div>
            ))}
          </div>

          {/* Store buttons — side by side on all screens */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all hover:border-violet-500/30 hover:bg-violet-500/5 sm:justify-start sm:gap-3 sm:px-5"
            >
              <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-[11px] text-stone-500 leading-tight sm:text-[11px]">{t.app.availableOn1}</div>
                <div className="text-xs font-bold text-white leading-tight sm:text-sm">{t.app.appStore}</div>
              </div>
            </a>

            <a
              href="https://eav7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all hover:border-violet-500/30 hover:bg-violet-500/5 sm:justify-start sm:gap-3 sm:px-5"
            >
              <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" />
              </svg>
              <div>
                <div className="text-[11px] text-stone-500 leading-tight sm:text-[11px]">{t.app.availableOn2}</div>
                <div className="text-xs font-bold text-white leading-tight sm:text-sm">{t.app.googlePlay}</div>
              </div>
            </a>
          </div>

          {/* QR Code hint */}
          <p className="mt-6 flex items-center gap-2 text-xs text-stone-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            Escaneie o QR code no app para começar ainda mais rápido
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-8 sm:-m-12 rounded-full bg-[#8e59ff]/10 blur-[80px]" aria-hidden />
            <motion.div
              animate={reduce || isMobile ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <EavRemoteImage
                src={eavImages.iphone}
                alt="App EAV Bank no iPhone"
                width={694}
                height={753}
                className="relative h-auto w-full max-w-[240px] object-contain drop-shadow-[0_20px_60px_rgba(99,54,196,0.3)] sm:max-w-[300px] lg:max-w-[360px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
