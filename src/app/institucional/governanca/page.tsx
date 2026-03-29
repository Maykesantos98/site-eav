"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function GovernancaPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const pillars = isPt
    ? [
        { title: "Ética e Integridade", desc: "Nosso Código de Conduta orienta as práticas de todos os colaboradores, parceiros e fornecedores." },
        { title: "Prevenção à Lavagem de Dinheiro", desc: "Políticas rigorosas de PLD/FTP em conformidade com regulamentações nacionais e internacionais." },
        { title: "Gestão de Riscos", desc: "Estrutura robusta de gestão de riscos operacionais, de mercado, de crédito e de liquidez." },
        { title: "Canal de Denúncias", desc: "Canal seguro e confidencial para reportar irregularidades ou condutas antiéticas." },
      ]
    : [
        { title: "Ethics and Integrity", desc: "Our Code of Conduct guides the practices of all employees, partners, and suppliers." },
        { title: "Anti-Money Laundering", desc: "Strict AML/CFT policies in compliance with national and international regulations." },
        { title: "Risk Management", desc: "Robust structure for operational, market, credit, and liquidity risk management." },
        { title: "Whistleblower Channel", desc: "Secure and confidential channel to report irregularities or unethical conduct." },
      ];

  const docs = isPt
    ? [
        "Código de Conduta e Ética",
        "Política de Prevenção à Lavagem de Dinheiro",
        "Política de Gestão de Riscos",
        "Política de Segurança da Informação",
        "Política de Privacidade de Dados",
        "Política de Responsabilidade Social",
      ]
    : [
        "Code of Conduct and Ethics",
        "Anti-Money Laundering Policy",
        "Risk Management Policy",
        "Information Security Policy",
        "Data Privacy Policy",
        "Social Responsibility Policy",
      ];

  return (
    <div className="space-y-14">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Governança & " : "Governance & "}
          <span className="eav-gradient-text">Compliance</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-400">
          {isPt
            ? "Operamos com os mais altos padrões de governança corporativa, ética e conformidade regulatória."
            : "We operate with the highest standards of corporate governance, ethics, and regulatory compliance."}
        </p>
      </motion.div>

      {/* Pillars */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Pilares" : "Pillars"}
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.03] sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#0c0a09] p-5">
              <h4 className="text-sm font-bold text-stone-200">{p.title}</h4>
              <p className="mt-2 text-xs leading-[1.7] text-stone-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Documents */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Documentos e políticas" : "Documents and policies"}
        </h2>
        <div className="mt-5 divide-y divide-white/[0.04]">
          {docs.map((doc) => (
            <div key={doc} className="flex items-center justify-between py-3">
              <span className="text-sm text-stone-400">{doc}</span>
              <span className="text-[10px] font-semibold text-stone-700 italic">
                {isPt ? "Em breve" : "Coming soon"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Regulatory */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
        className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5"
      >
        <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400/70 uppercase">
          {isPt ? "Informações regulatórias" : "Regulatory information"}
        </p>
        <p className="mt-3 text-xs leading-[1.8] text-stone-600">
          {isPt
            ? "EAV Bank — Serviços financeiros digitais operados pela EAV7 Tecnologia e Pagamentos Ltda. CNPJ: 65.789.137/0001-12. As operações de câmbio e transferências internacionais estão sujeitas à regulamentação vigente."
            : "EAV Bank — Digital financial services operated by EAV7 Technology and Payments Ltd. Foreign exchange and international transfer operations are subject to current regulations."}
        </p>
      </motion.div>
    </div>
  );
}
