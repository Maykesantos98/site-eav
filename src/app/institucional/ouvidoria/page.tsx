"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function OuvidoriaPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const steps = isPt
    ? [
        "Registre sua demanda pelos canais disponíveis",
        "Receba um número de protocolo para acompanhamento",
        "Nossa equipe analisa e responde em até 10 dias úteis",
        "Avalie o atendimento para nos ajudar a melhorar",
      ]
    : [
        "Submit your request through available channels",
        "Receive a protocol number for tracking",
        "Our team analyzes and responds within 10 business days",
        "Rate the service to help us improve",
      ];

  return (
    <div className="space-y-14">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Ouvidoria" : "Ombudsman"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-400">
          {isPt
            ? "Canal de segunda instância para clientes que já registraram reclamação no SAC e não ficaram satisfeitos com a solução."
            : "Second-level channel for customers who have already filed a complaint with SAC and were not satisfied with the solution."}
        </p>
      </motion.div>

      {/* When to use */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
        className="rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-5"
      >
        <p className="text-sm font-semibold text-stone-300">
          {isPt ? "Quando acionar a Ouvidoria?" : "When to contact the Ombudsman?"}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-500">
          {isPt
            ? "Somente quando sua demanda já foi registrada no SAC e a solução não foi satisfatória. Para demandas iniciais, utilize os canais regulares."
            : "Only when your request was already registered with SAC and the solution was not satisfactory. For initial requests, use regular channels."}
        </p>
      </motion.div>

      {/* Contact */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Canais" : "Channels"}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5">
            <p className="text-[10px] font-bold tracking-[0.15em] text-stone-600 uppercase">{isPt ? "Telefone" : "Phone"}</p>
            <p className="mt-2 text-sm font-semibold text-stone-500 italic">{isPt ? "Em breve" : "Coming soon"}</p>
            <p className="mt-1 text-[11px] text-stone-700">{isPt ? "Seg. a sex., 9h às 18h" : "Mon-Fri, 9am to 6pm"}</p>
          </div>
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5">
            <p className="text-[10px] font-bold tracking-[0.15em] text-stone-600 uppercase">E-mail</p>
            <p className="mt-2 text-sm font-semibold text-violet-400">ouvidoria@eavbank.com</p>
            <p className="mt-1 text-[11px] text-stone-700">{isPt ? "Resposta em até 10 dias úteis" : "Response within 10 business days"}</p>
          </div>
        </div>
      </motion.div>

      {/* Process */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Como funciona" : "How it works"}
        </h2>
        <ol className="mt-5 space-y-3 border-l border-white/[0.06] pl-5">
          {steps.map((s, i) => (
            <li key={i} className="relative text-sm text-stone-500">
              <span className="absolute -left-[22px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500/10 text-[10px] font-bold text-violet-400">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </motion.div>

      {/* BACEN */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
        className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5"
      >
        <p className="text-sm font-semibold text-stone-300">
          {isPt ? "Banco Central do Brasil" : "Central Bank of Brazil"}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">
          {isPt
            ? "Caso não resolvida pela Ouvidoria, registre reclamação no Banco Central pelo telefone 145 ou pelo site bcb.gov.br."
            : "If not resolved by the Ombudsman, file a complaint with the Central Bank by calling 145 or visiting bcb.gov.br."}
        </p>
      </motion.div>
    </div>
  );
}
