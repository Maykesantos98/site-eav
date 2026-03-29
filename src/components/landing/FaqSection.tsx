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
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-violet-300"
      >
        <span className="text-base font-semibold text-white sm:text-lg">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
        >
          <svg
            className="h-4 w-4 text-violet-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
          </svg>
        </motion.div>
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
            <p className="pb-5 pr-12 text-sm leading-relaxed text-stone-400 sm:text-base">
              {faq.a}
            </p>
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
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="text-center"
      >
        <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">{t.faq.label}</span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white md:text-4xl">
          {t.faq.title1}<span className="eav-gradient-text">{t.faq.titleHighlight}</span>
        </h2>
        <p className="mt-4 text-stone-400">{t.faq.desc}</p>
      </motion.div>

      <div className="mt-12">
        {t.faq.items.map((faq, i) => (
          <FaqItem key={faq.q} faq={faq} index={i} />
        ))}
      </div>
    </section>
  );
}
