"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eavImages } from "@/constants/eavMedia";
import { EavRemoteImage } from "@/components/EavRemoteImage";
import Image from "next/image";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

export function AppDownloadSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="app" className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#050505]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-lifestyle.jpg")} alt="" fill className="object-cover opacity-[0.05] saturate-[0.3]" sizes="100vw" />
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#6336c4]/5 blur-[200px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#8e59ff]/5 blur-[150px]" />

      {/* Top border */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">{t.app.label}</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.app.title1}
              <span className="text-gradient-primary">{t.app.titleHighlight}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
              {t.app.desc}
            </p>

            {/* Features grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {t.app.features.map((feat: string, i: number) => (
                <motion.div
                  key={feat}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#6336c4]/20 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-300">{feat}</span>
                </motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://eav7.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] px-6 py-4 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#0a0a0a]/80 sm:justify-start"
              >
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-xs text-neutral-500 leading-tight">{t.app.availableOn1}</div>
                  <div className="text-base font-bold text-white leading-tight">{t.app.appStore}</div>
                </div>
              </a>
              
              <a
                href="https://eav7.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] px-6 py-4 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#0a0a0a]/80 sm:justify-start"
              >
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" />
                </svg>
                <div>
                  <div className="text-xs text-neutral-500 leading-tight">{t.app.availableOn2}</div>
                  <div className="text-base font-bold text-white leading-tight">{t.app.googlePlay}</div>
                </div>
              </a>
            </div>

            {/* Rating badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-4 rounded-full border border-white/[0.05] bg-white/[0.02] px-5 py-3"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white">4.9</span>
              <span className="text-xs text-neutral-500">+50k avaliacoes</span>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone glow */}
              <div className="absolute inset-0 -m-8 rounded-[60px] bg-[#6336c4]/15 blur-[60px]" />
              
              {/* Floating notification cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-1/4 -left-4 sm:-left-8 z-10"
              >
                <div className="flex items-center gap-3 rounded-xl bg-[#0a0a0a]/90 border border-white/10 px-4 py-3 backdrop-blur-sm shadow-xl">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Pix recebido</p>
                    <p className="text-[10px] text-neutral-500">R$ 1.500,00</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-1/3 -right-4 sm:-right-8 z-10"
              >
                <div className="flex items-center gap-3 rounded-xl bg-[#0a0a0a]/90 border border-[#6336c4]/20 px-4 py-3 backdrop-blur-sm shadow-xl">
                  <div className="h-8 w-8 rounded-full bg-[#6336c4]/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-[#8e59ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Investimento</p>
                    <p className="text-[10px] text-green-500">+2.4% hoje</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                animate={reduce ? {} : { y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <EavRemoteImage
                  src={eavImages.iphone}
                  alt="App EAV Bank no iPhone"
                  width={694}
                  height={753}
                  className="relative h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] object-contain drop-shadow-[0_40px_100px_rgba(99,54,196,0.4)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
