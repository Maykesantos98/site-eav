"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SobrePage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const values = isPt
    ? [
        { title: "Inovação", desc: "Tecnologias proprietárias que redefinem a experiência financeira global." },
        { title: "Segurança", desc: "Proteção de nível bancário com criptografia avançada e monitoramento 24/7." },
        { title: "Globalização", desc: "150+ países conectados sem barreiras, sem burocracia." },
        { title: "Transparência", desc: "Zero taxas ocultas. Cada tarifa comunicada antes da operação." },
        { title: "Agilidade", desc: "Transações internacionais em até 3 segundos, disponibilidade total." },
        { title: "Inclusão", desc: "Acesso a serviços financeiros globais, de qualquer lugar." },
      ]
    : [
        { title: "Innovation", desc: "Proprietary technologies redefining the global financial experience." },
        { title: "Security", desc: "Bank-grade protection with advanced encryption and 24/7 monitoring." },
        { title: "Globalization", desc: "150+ countries connected without barriers or bureaucracy." },
        { title: "Transparency", desc: "Zero hidden fees. Every fee communicated before the operation." },
        { title: "Agility", desc: "International transactions in up to 3 seconds, full availability." },
        { title: "Inclusion", desc: "Access to global financial services, from anywhere." },
      ];

  const timeline = isPt
    ? [
        { year: "2020", text: "Fundação da EAV7 Tecnologia com a visão de um banco verdadeiramente global." },
        { year: "2021", text: "Início do desenvolvimento da EAV7 Smart Chain, nossa infraestrutura blockchain proprietária." },
        { year: "2022", text: "Lançamento da plataforma beta com operações em 50 países." },
        { year: "2023", text: "Expansão para 150+ países e lançamento dos cartões Visa." },
        { year: "2024", text: "Lançamento do câmbio inteligente com IA e conta PJ completa." },
        { year: "2025", text: "Consolidação como referência em banco digital global." },
      ]
    : [
        { year: "2020", text: "Foundation of EAV7 Technology with the vision of a truly global bank." },
        { year: "2021", text: "Start of development of EAV7 Smart Chain, our proprietary blockchain infrastructure." },
        { year: "2022", text: "Beta platform launch with operations in 50 countries." },
        { year: "2023", text: "Expansion to 150+ countries and Visa card launch." },
        { year: "2024", text: "Smart FX launch with AI and full business account." },
        { year: "2025", text: "Consolidation as a global digital banking reference." },
      ];

  return (
    <div className="space-y-14">
      {/* Header */}
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Sobre o " : "About "}
          <span className="eav-gradient-text">EAV Bank</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-400">
          {isPt
            ? "O EAV Bank nasceu com a missão de democratizar o acesso a serviços financeiros globais. Unimos tecnologia de ponta, inteligência artificial e infraestrutura blockchain para uma experiência financeira sem fronteiras."
            : "EAV Bank was born to democratize access to global financial services. We combine cutting-edge technology, AI, and blockchain infrastructure for a borderless financial experience."}
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400/70 uppercase">
            {isPt ? "Missão" : "Mission"}
          </p>
          <p className="mt-3 text-sm leading-[1.8] text-stone-400">
            {isPt
              ? "Empoderar pessoas e empresas com serviços financeiros globais, acessíveis, seguros e transparentes — independente de onde estejam."
              : "Empower people and businesses with global, accessible, secure, and transparent financial services — regardless of where they are."}
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400/70 uppercase">
            {isPt ? "Visão" : "Vision"}
          </p>
          <p className="mt-3 text-sm leading-[1.8] text-stone-400">
            {isPt
              ? "Ser o banco digital mais confiável e inovador do mundo, dando a cada pessoa controle total sobre seu dinheiro, sem limitações geográficas."
              : "To be the most trusted and innovative digital bank in the world, giving every person full control over their money, without geographic limitations."}
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Nossos valores" : "Our values"}
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-[#0c0a09] p-5">
              <h4 className="text-sm font-bold text-stone-200">{v.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Trajetória" : "Journey"}
        </h2>
        <div className="mt-6 space-y-0 border-l border-white/[0.06] pl-6">
          {timeline.map((item) => (
            <div key={item.year} className="relative pb-6 last:pb-0">
              <div className="absolute -left-[25px] top-0.5 h-2 w-2 rounded-full bg-violet-500/60" />
              <span className="text-[11px] font-bold text-violet-400/80">{item.year}</span>
              <p className="mt-0.5 text-sm text-stone-500">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
