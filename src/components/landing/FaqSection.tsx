"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { useLang } from "@/constants/LangContext";

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index + 1}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-violet-300"
      >
        <span className="text-[15px] font-semibold leading-snug text-white sm:text-lg">{faq.q}</span>
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-violet-400 transition-transform duration-200 select-none ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-stone-400 sm:text-base">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  return (
    <section id="faq" className="eav-section-violet relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="eav-section-label">{t.faq.label}</span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-4xl md:tracking-[-0.015em]">
            {t.faq.title1}<span className="eav-gradient-text">{t.faq.titleHighlight}</span>
          </h2>
          <p className="mt-4 leading-[1.7] text-stone-400">{t.faq.desc}</p>
        </motion.div>

        <div className="mt-12">
          {t.faq.items.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
