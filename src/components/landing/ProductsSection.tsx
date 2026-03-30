"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { Icon, type IconName } from "@/components/ui/Icon";

export function ProductsSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("voce");

  const tabs = t.products.tabs;
  const items = activeTab === "empresas" ? t.products.empresas : t.products.voce;

  return (
    <section id="produtos" className="relative overflow-hidden py-16 sm:py-28 lg:py-44">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0f0c18] to-[#0c0a09]" aria-hidden />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8e59ff]/20 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/15 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-badge">
            <Icon name="sparkles" size="xs" />
            {t.products.title}
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:tracking-[-0.025em]">
            {t.products.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-stone-400 sm:text-lg">
            {t.products.desc}
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <div className="inline-flex gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#6336c4] to-[#8e59ff] text-white shadow-lg shadow-[#6336c4]/30"
                    : "text-stone-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Icon name={tab.id === "voce" ? "users" : "building"} size="sm" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Products Grid ── */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {items.map((product, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8e59ff]/25 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-[#6336c4]/5"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8e59ff]/10 text-[#8e59ff] transition-colors duration-300 group-hover:bg-[#8e59ff]/20">
                <Icon name={product.icon as IconName} size="lg" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-white">{product.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-stone-400">{product.description}</p>

              {/* Features */}
              <ul className="mb-6 flex-1 space-y-2">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-stone-400">
                    <Icon name="check" size="xs" className="flex-shrink-0 text-[#8e59ff]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#conta"
                whileHover={reduce ? {} : { x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 transition-colors duration-200 hover:text-white"
              >
                {product.cta}
                <Icon name="arrow-right" size="sm" className="stroke-[2]" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
