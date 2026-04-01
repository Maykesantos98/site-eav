"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

export function ProductsSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("voce");

  const tabs = t.products.tabs;
  const items = activeTab === "empresas" ? t.products.empresas : t.products.voce;

  return (
    <section id="produtos" className="relative overflow-hidden py-16 sm:py-28 lg:py-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/bg-payment.jpg")} alt="" fill className="object-cover opacity-[0.05] saturate-[0.4] sm:opacity-[0.08]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/85 to-[#0c0a09]" />
      </div>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/10 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6336c4]/8 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-section-label">{t.products.title}</span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {t.products.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-stone-400 sm:text-lg">
            {t.products.desc}
          </p>
        </motion.div>

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
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#6336c4] text-white shadow-lg shadow-[#6336c4]/30"
                    : "text-stone-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {items.map((product, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#6336c4]/[0.03] hover:shadow-xl hover:shadow-[#6336c4]/5"
            >
              <div className="mb-5 h-0.5 w-8 rounded-full bg-[#6336c4]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[#6336c4]/60" />

              <h3 className="mb-2 text-lg font-bold text-white">{product.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-stone-400">{product.description}</p>

              <ul className="mb-6 flex-1 space-y-2">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-stone-400">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6336c4]/50" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#conta"
                whileHover={reduce ? {} : { x: 4 }}
                className="inline-flex items-center gap-1 text-sm font-semibold text-stone-400 transition-colors duration-200 hover:text-white"
              >
                {product.cta}
                <span className="text-[#6336c4] transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
