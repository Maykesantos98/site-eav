"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContatoPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const channels = isPt
    ? [
        { title: "SAC", info: "Em breve", sub: "Central de atendimento 24h" },
        { title: "Ouvidoria", info: "Em breve", sub: "Seg. a sex., 9h às 18h" },
        { title: "WhatsApp", info: "Em breve", sub: "Atendimento rápido e prático" },
        { title: "E-mail", info: "contato@eavbank.com", sub: "Resposta em até 24h úteis" },
        { title: "Chat no App", info: "Em breve", sub: "Disponível no app EAV Bank" },
        { title: "Atendimento PJ", info: "Em breve", sub: "Linha exclusiva para empresas" },
      ]
    : [
        { title: "SAC", info: "Coming soon", sub: "24h customer support" },
        { title: "Ombudsman", info: "Coming soon", sub: "Mon-Fri, 9am to 6pm" },
        { title: "WhatsApp", info: "Coming soon", sub: "Fast and practical support" },
        { title: "Email", info: "contact@eavbank.com", sub: "Response within 24 business hours" },
        { title: "In-App Chat", info: "Coming soon", sub: "Available in the EAV Bank app" },
        { title: "Business Support", info: "Coming soon", sub: "Exclusive line for businesses" },
      ];

  return (
    <div className="space-y-14">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Contato" : "Contact"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-400">
          {isPt
            ? "Estamos aqui para ajudar. Escolha o canal mais conveniente."
            : "We are here to help. Choose the most convenient channel."}
        </p>
      </motion.div>

      {/* Channels */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((ch) => (
            <div key={ch.title} className="bg-[#0c0a09] p-5">
              <p className="text-[10px] font-bold tracking-[0.15em] text-stone-600 uppercase">{ch.title}</p>
              <p className={`mt-2 text-sm font-semibold ${ch.info.includes("breve") || ch.info.includes("soon") ? "text-stone-500 italic" : "text-violet-400"}`}>
                {ch.info}
              </p>
              <p className="mt-1 text-[11px] text-stone-700">{ch.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact form */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isPt ? "Envie uma mensagem" : "Send a message"}
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 max-w-lg space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">{isPt ? "Nome" : "Name"}</label>
              <input type="text" className="eav-input rounded-xl" placeholder={isPt ? "Seu nome" : "Your name"} />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">E-mail</label>
              <input type="email" className="eav-input rounded-xl" placeholder={isPt ? "Seu e-mail" : "Your email"} />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">{isPt ? "Mensagem" : "Message"}</label>
            <textarea rows={4} className="eav-input rounded-xl resize-none" placeholder={isPt ? "Escreva sua mensagem..." : "Write your message..."} />
          </div>
          <button type="submit" className="eav-btn-primary text-sm">
            {isPt ? "Enviar" : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
