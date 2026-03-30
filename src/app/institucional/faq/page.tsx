"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FaqPage() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t.faq.items;

  return (
    <motion.div initial="hidden" animate="visible" variants={fade}>
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-[11px] font-bold tracking-wider text-violet-400 uppercase">
          {t.faq.label}
        </span>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {t.faq.title1}<span className="eav-gradient-text">{t.faq.titleHighlight}</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
          {t.faq.desc}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-violet-500/20 bg-violet-500/[0.03]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className={`text-sm font-semibold transition-colors sm:text-base ${isOpen ? "text-white" : "text-stone-300"}`}>
                  {item.q}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-stone-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-stone-400 sm:px-6 sm:pb-6">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
