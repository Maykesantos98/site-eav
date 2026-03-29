"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";

const trustIcons: Record<string, string> = {
  shield:
    "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z",
  lock:
    "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
  eye:
    "M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41z",
  key:
    "M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM3 13.5A1.5 1.5 0 014.5 12h11a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 17.5v-4zm15-11A2.5 2.5 0 0015.5 0h-11A2.5 2.5 0 002 2.5v7A2.5 2.5 0 004.5 12h11a2.5 2.5 0 002.5-2.5v-7z",
  check:
    "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  globe:
    "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.001A11.17 11.17 0 0010 14c1.588 0 3.07-.395 4.373-1.082A6.472 6.472 0 0016.5 10z",
};

export function TrustSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="confianca" className="relative overflow-hidden py-28 sm:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0f0a1a] to-[#0c0a09]" aria-hidden />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-[#6336c4]/6 blur-[120px]" aria-hidden />
      <div className="eav-section-line-top" aria-hidden />
      <div className="eav-section-line-bottom" aria-hidden />

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
          <span className="eav-badge">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d={trustIcons.shield} clipRule="evenodd" />
            </svg>
            {t.trust.label}
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-[-0.02em]">
            {t.trust.title1}
            <span className="eav-gradient-text">{t.trust.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {t.trust.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.04] hover:shadow-lg hover:shadow-violet-950/10"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:scale-110">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d={trustIcons[item.icon] ?? trustIcons.shield}
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
