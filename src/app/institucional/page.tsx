"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/constants/LangContext";

export default function InstitucionalPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const sections = isPt
    ? [
        { href: "/institucional/sobre", title: "Sobre nós", desc: "Missão, visão e a história do EAV Bank." },
        { href: "/institucional/governanca", title: "Governança & Compliance", desc: "Ética, conformidade regulatória e políticas internas." },
        { href: "/institucional/seguranca", title: "Segurança", desc: "Como protegemos sua conta, seus dados e seu dinheiro." },
        { href: "/institucional/contato", title: "Contato", desc: "Canais de atendimento e formulário de contato." },
        { href: "/institucional/ouvidoria", title: "Ouvidoria", desc: "Canal de segunda instância para demandas não resolvidas." },
        { href: "/institucional/termos", title: "Termos de uso", desc: "Condições de uso dos serviços do EAV Bank." },
        { href: "/institucional/privacidade", title: "Privacidade", desc: "Como tratamos e protegemos seus dados pessoais." },
      ]
    : [
        { href: "/institucional/sobre", title: "About us", desc: "Mission, vision and the history of EAV Bank." },
        { href: "/institucional/governanca", title: "Governance & Compliance", desc: "Ethics, regulatory compliance and internal policies." },
        { href: "/institucional/seguranca", title: "Security", desc: "How we protect your account, data and money." },
        { href: "/institucional/contato", title: "Contact", desc: "Support channels and contact form." },
        { href: "/institucional/ouvidoria", title: "Ombudsman", desc: "Second-level channel for unresolved demands." },
        { href: "/institucional/termos", title: "Terms of use", desc: "Conditions of use for EAV Bank services." },
        { href: "/institucional/privacidade", title: "Privacy", desc: "How we process and protect your personal data." },
      ];

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Institucional" : "Institutional"}
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-500">
          {isPt
            ? "Transparência e confiança. Tudo sobre o EAV Bank em um só lugar."
            : "Transparency and trust. Everything about EAV Bank in one place."}
        </p>
      </motion.div>

      {/* Simple list */}
      <div className="mt-10 divide-y divide-white/[0.04]">
        {sections.map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <Link
              href={s.href}
              className="group flex items-center justify-between py-4 transition-colors"
            >
              <div>
                <h3 className="text-sm font-semibold text-stone-300 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-xs text-stone-600">{s.desc}</p>
              </div>
              <span className="ml-4 text-stone-700 group-hover:text-violet-400 transition-colors">
                &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
