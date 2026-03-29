"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SegurancaPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const layers = isPt
    ? [
        { title: "Criptografia AES-256", desc: "O mesmo padrão de agências de defesa e bancos de primeira linha. Todos os dados em trânsito e em repouso são cifrados." },
        { title: "Autenticação multifator", desc: "Biometria facial, PIN e 2FA via app. Camadas de proteção que garantem que só você acessa sua conta." },
        { title: "Detecção de fraudes com IA", desc: "Monitoramento em tempo real de cada transação. Padrões suspeitos são identificados e bloqueados instantaneamente." },
        { title: "Monitoramento 24/7", desc: "Equipe dedicada + sistemas automatizados monitorando infraestrutura e operações sem interrupção." },
        { title: "Infraestrutura distribuída", desc: "Servidores em múltiplas regiões com redundância total para alta disponibilidade." },
        { title: "Conformidade LGPD", desc: "Todo tratamento de dados em conformidade com a Lei Geral de Proteção de Dados e regulamentações internacionais." },
      ]
    : [
        { title: "AES-256 Encryption", desc: "The same standard used by defense agencies and first-tier banks. All data in transit and at rest is encrypted." },
        { title: "Multi-factor authentication", desc: "Facial biometrics, PIN and 2FA via app. Layered protection ensuring only you access your account." },
        { title: "AI fraud detection", desc: "Real-time monitoring of every transaction. Suspicious patterns are identified and blocked instantly." },
        { title: "24/7 monitoring", desc: "Dedicated team + automated systems monitoring infrastructure and operations without interruption." },
        { title: "Distributed infrastructure", desc: "Servers across multiple regions with full redundancy for high availability." },
        { title: "LGPD compliance", desc: "All data processing compliant with the General Data Protection Law and international regulations." },
      ];

  const tips = isPt
    ? [
        "Nunca compartilhe sua senha ou código de verificação",
        "Ative a autenticação em dois fatores",
        "Verifique o remetente antes de clicar em links",
        "Use senhas fortes e únicas",
        "Mantenha o app sempre atualizado",
        "Desconfie de ligações pedindo dados bancários",
      ]
    : [
        "Never share your password or verification code",
        "Enable two-factor authentication",
        "Check the sender before clicking on links",
        "Use strong and unique passwords",
        "Keep the app always updated",
        "Be suspicious of calls asking for banking data",
      ];

  return (
    <div className="space-y-14">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Segurança" : "Security"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-400">
          {isPt
            ? "Segurança não é uma funcionalidade — é a base de tudo que construímos. Investimos continuamente para proteger seu dinheiro e seus dados."
            : "Security is not a feature — it's the foundation of everything we build. We continuously invest to protect your money and data."}
        </p>
      </motion.div>

      {/* Layers */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.03] sm:grid-cols-2">
          {layers.map((l, i) => (
            <div key={i} className="bg-[#0c0a09] p-5">
              <h4 className="text-sm font-bold text-stone-200">{l.title}</h4>
              <p className="mt-2 text-xs leading-[1.7] text-stone-600">{l.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Proteja-se" : "Protect yourself"}
        </h2>
        <ul className="mt-5 space-y-2.5">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-stone-500">
              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-violet-500/60" />
              {tip}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Emergency */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
        className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-5"
      >
        <p className="text-sm font-semibold text-stone-300">
          {isPt ? "Suspeita de fraude?" : "Suspect fraud?"}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-500">
          {isPt
            ? "Bloqueie seu cartão diretamente pelo app ou entre em contato com nossos canais de atendimento imediatamente."
            : "Block your card directly through the app or contact our support channels immediately."}
        </p>
      </motion.div>
    </div>
  );
}
