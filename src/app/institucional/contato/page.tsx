"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/constants/LangContext";
import { Icon } from "@/components/ui/Icon";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContatoPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function sanitize(val: string) {
    return val.replace(/<[^>]*>/g, "").trim();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return; // bot detected

    const name = sanitize((form.elements.namedItem("name") as HTMLInputElement)?.value ?? "");
    const email = sanitize((form.elements.namedItem("email") as HTMLInputElement)?.value ?? "");
    const message = sanitize((form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "");

    if (!name || !email || !message) return;
    if (/<script|javascript:|on\w+=/i.test(name + email + message)) return;

    setSending(true);
    // TODO: Integrar com backend real (Formspree, Resend, etc.)
    setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  }

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

        {/* Success banner */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3"
            >
              <Icon name="check-circle" size="sm" className="text-emerald-400" />
              <span className="text-sm text-emerald-300">
                {isPt ? "Mensagem enviada com sucesso!" : "Message sent successfully!"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="mt-6 max-w-lg space-y-4">
          {/* Honeypot anti-spam — hidden from real users */}
          <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">{isPt ? "Nome" : "Name"}</label>
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                pattern="[^<>]*"
                className="eav-input rounded-xl"
                placeholder={isPt ? "Seu nome" : "Your name"}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">E-mail</label>
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                className="eav-input rounded-xl"
                placeholder={isPt ? "Seu e-mail" : "Your email"}
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-semibold text-stone-500">{isPt ? "Mensagem" : "Message"}</label>
            <textarea
              name="message"
              rows={4}
              required
              minLength={10}
              maxLength={2000}
              className="eav-input rounded-xl resize-none"
              placeholder={isPt ? "Escreva sua mensagem..." : "Write your message..."}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="eav-btn-primary text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {isPt ? "Enviando..." : "Sending..."}
              </>
            ) : (
              <>
                {isPt ? "Enviar" : "Send"}
                <Icon name="paper-airplane" size="sm" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
