"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { Icon, type IconName } from "@/components/ui/Icon";

const trustIconMap: Record<string, IconName> = {
  shield: "shield",
  lock: "lock",
  eye: "eye",
  key: "key",
  check: "check-circle",
  globe: "globe",
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
            <Icon name="shield" size="xs" />
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
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:scale-105">
                <Icon name={trustIconMap[item.icon] ?? "shield"} size="md" />
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
