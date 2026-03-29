"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { asset } from "@/constants/basePath";

const rows = [
  { feature: "IOF em transferências", eav: "0%", trad: "Até 6,38%", eavWins: true },
  { feature: "Velocidade de transferência", eav: "< 3 segundos", trad: "1–5 dias úteis", eavWins: true },
  { feature: "Taxas ocultas", eav: "Nenhuma", trad: "Spread + taxas", eavWins: true },
  { feature: "Disponibilidade", eav: "24/7", trad: "Horário bancário", eavWins: true },
  { feature: "Criptomoedas integradas", eav: "Sim", trad: "Não", eavWins: true },
  { feature: "Cartão internacional", eav: "Sem anuidade", trad: "R$ 300–800/ano", eavWins: true },
  { feature: "Segurança IA", eav: "Smart Chain + IA", trad: "Básica", eavWins: true },
  { feature: "Abertura de conta", eav: "Minutos", trad: "Dias/semanas", eavWins: true },
];

export function ComparisonSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background: abstract gradient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-abstract.jpg")}
          alt=""
          fill
          className="object-cover object-center opacity-[0.08] sm:opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/50 to-[#0c0a09]/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
      <motion.div
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="text-center"
      >
        <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
          Comparação
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
          EAV Bank <span className="eav-gradient-text">vs. Bancos tradicionais</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-stone-400">
          Veja por que milhares de pessoas estão migrando para o EAV Bank.
        </p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06]"
      >
        {/* Header */}
        <div className="hidden border-b border-white/[0.06] bg-white/[0.02] sm:grid sm:grid-cols-3">
          <div className="px-4 py-4 text-sm font-semibold text-stone-400 sm:px-6">Recurso</div>
          <div className="flex items-center justify-center gap-2 px-4 py-4 text-center sm:px-6">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff]" />
            <span className="text-sm font-bold text-white">EAV Bank</span>
          </div>
          <div className="px-4 py-4 text-center text-sm font-semibold text-stone-500 sm:px-6">
            Bancos tradicionais
          </div>
        </div>

        {/* Rows — cards on mobile, table on sm+ */}
        {rows.map((row, i) => (
          <div
            key={row.feature}
            className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
              i === rows.length - 1 ? "border-0" : ""
            }`}
          >
            {/* Mobile: stacked card layout */}
            <div className="flex flex-col gap-2 px-4 py-4 sm:hidden">
              <div className="text-sm font-medium text-stone-300">{row.feature}</div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {row.eav}
                </span>
                <span className="text-xs text-stone-600 line-through">{row.trad}</span>
              </div>
            </div>
            {/* Desktop: 3-col grid */}
            <div className="hidden sm:grid sm:grid-cols-3">
              <div className="flex items-center px-4 py-3.5 text-sm text-stone-300 sm:px-6 sm:py-4">
                {row.feature}
              </div>
              <div className="flex items-center justify-center px-4 py-3.5 text-center sm:px-6 sm:py-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                  <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {row.eav}
                </span>
              </div>
              <div className="flex items-center justify-center px-4 py-3.5 text-center text-sm text-stone-500 sm:px-6 sm:py-4">
                {row.trad}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
