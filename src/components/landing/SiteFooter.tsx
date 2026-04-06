"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { EavLogo } from "@/components/EavLogo";
import { useLang } from "@/constants/LangContext";
import basePath from "@/constants/basePath";
import { asset } from "@/constants/basePath";

export function SiteFooter() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const home = basePath || "/";
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative bg-[#050505]">
      {/* ═══ CTA Banner - Premium fullwidth style ═══ */}
      <section id="conta" className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image src={asset("/images/bg-city.jpg")} alt="" fill className="object-cover opacity-[0.08] saturate-[0.3]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-[#6336c4]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">Comece agora</span>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t.footer.ctaTitle1}
                <span className="text-gradient-primary">{t.footer.ctaTitleHighlight}</span>?
              </h3>
              <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
                {t.footer.ctaDesc}
              </p>
            </motion.div>

            {/* Email form */}
            <motion.form
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                const hp = (e.currentTarget.elements.namedItem("company") as HTMLInputElement)?.value;
                if (hp) return;
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 2000);
              }}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input type="text" name="company" autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" />
              <input
                type="email"
                required
                maxLength={254}
                placeholder="Seu melhor e-mail"
                className="flex-1 rounded-full border border-white/[0.08] bg-[#0a0a0a] px-6 py-4 text-sm text-white placeholder:text-neutral-600 focus:border-[#6336c4]/30 focus:outline-none focus:ring-2 focus:ring-[#6336c4]/20 transition-all"
              />
              <button
                type="submit"
                disabled={submitted}
                className={`group relative overflow-hidden rounded-full bg-[#6336c4] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#6336c4]/25 transition-all duration-300 hover:bg-[#7344d8] hover:shadow-[#6336c4]/35 ${submitted ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  {submitted ? "Em breve!" : t.footer.ctaBtn}
                  {!submitted && (
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </span>
              </button>
            </motion.form>

            <p className="mt-5 text-xs text-neutral-600">
              Ao se cadastrar, voce concorda com nossos{" "}
              <Link href="/institucional/termos" className="underline decoration-neutral-700 hover:text-neutral-400 transition-colors">Termos de Uso</Link>{" "}e{" "}
              <Link href="/institucional/privacidade" className="underline decoration-neutral-700 hover:text-neutral-400 transition-colors">Politica de Privacidade</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Main footer ═══ */}
      <div className="border-t border-white/[0.05] bg-[#030303]">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">

          {/* ── Top: Logo + Links grid ── */}
          <div className="grid gap-12 lg:grid-cols-12">

            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block">
                <EavLogo height={36} />
              </Link>
              <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-neutral-600">
                {t.footer.brandDesc}
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-2">
                {[
                  { label: "Instagram", svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
                  { label: "X", svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                  { label: "LinkedIn", svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="https://eav7.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.02] text-neutral-600 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#6336c4]/10 hover:text-white"
                    aria-label={social.label}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">{social.svg}</svg>
                  </a>
                ))}
              </div>

              {/* App badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { store: t.app.appStore, sub: t.app.availableOn1, icon: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /> },
                  { store: t.app.googlePlay, sub: t.app.availableOn2, icon: <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" /> },
                ].map((app) => (
                  <a key={app.store} href="https://eav7.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-[#6336c4]/20 hover:bg-[#6336c4]/5"
                  >
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">{app.icon}</svg>
                    <div>
                      <div className="text-[10px] leading-tight text-neutral-600">{app.sub}</div>
                      <div className="text-xs font-bold leading-tight text-white">{app.store}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
              {/* Produto */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{t.footer.produto}</h4>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: t.footer.links.contaDigital, href: `${home}#conta` },
                    { label: t.footer.links.cartao, href: `${home}#cartoes` },
                    { label: t.footer.links.contaPJ, href: `${home}#empresas` },
                    { label: t.footer.links.empresas, href: `${home}#empresas` },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-neutral-600 transition-colors hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recursos */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{t.footer.recursos}</h4>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: t.footer.links.pix, href: `${home}#solucoes` },
                    { label: t.footer.links.transferencias, href: `${home}#solucoes` },
                    { label: t.footer.links.investimentos, href: `${home}#solucoes` },
                    { label: t.footer.links.cambio, href: `${home}#solucoes` },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-neutral-600 transition-colors hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institucional */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{t.footer.institucional}</h4>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: t.footer.links.sobre, href: "/institucional/sobre" },
                    { label: t.footer.links.contato, href: "/institucional/contato" },
                    { label: t.footer.links.termos, href: "/institucional/termos" },
                    { label: t.footer.links.privacidade, href: "/institucional/privacidade" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-neutral-600 transition-colors hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suporte */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Suporte</h4>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: "Perguntas frequentes", href: "/institucional/faq" },
                    { label: "Seguranca", href: "/institucional/seguranca" },
                    { label: "Ouvidoria", href: "/institucional/ouvidoria" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-neutral-600 transition-colors hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                  <li>
                    <span className="text-sm text-neutral-700">
                      DPO: <span className="text-[#8e59ff]">dpo@eavbank.com</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Contato / SAC ── */}
          <div className="mt-14 grid gap-4 rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "SAC", info: "Em breve", sub: "Atendimento 24h, 7 dias por semana" },
              { title: "Ouvidoria", info: "Em breve", sub: "Dias uteis, 9h as 18h (Brasilia)" },
              { title: "Atendimento em Libras", info: "Em breve", sub: "Atendimento 24h, 7 dias por semana" },
              { title: "Encarregado de Dados (DPO)", info: "dpo@eavbank.com", sub: "LGPD", isDpo: true },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-xs font-semibold text-white">{item.title}</p>
                <p className={`mt-1 text-sm ${"isDpo" in item && item.isDpo ? "text-[#8e59ff]" : "text-neutral-600 italic"}`}>{item.info}</p>
                <p className="mt-0.5 text-xs text-neutral-700">
                  {"isDpo" in item && item.isDpo ? (
                    <Link href="/institucional/privacidade" className="underline decoration-neutral-800 hover:text-neutral-500 transition-colors">{item.sub}</Link>
                  ) : item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* ── Regulatory ── */}
          <div className="mt-10 rounded-xl border border-white/[0.03] bg-white/[0.01] p-5">
            <p className="text-xs leading-relaxed text-neutral-700">
              O EAV Bank e uma plataforma de servicos financeiros digitais operada pela EAV7 Tecnologia e Pagamentos Ltda.
              As operacoes de cambio e transferencias internacionais estao sujeitas a regulamentacao vigente do Banco Central do Brasil.
              Os servicos financeiros sao prestados pela EAV7 Tecnologia e Pagamentos Ltda.
              Investimentos envolvem riscos. Rentabilidade passada nao garante resultados futuros.
            </p>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.05] pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs text-neutral-600">
                &copy; {new Date().getFullYear()} EAV7 Tecnologia e Pagamentos Ltda. {t.footer.copyright}
              </p>
              <p className="text-[11px] text-neutral-700">
                CNPJ 65.789.137/0001-12 - Av. Brig. Faria Lima, 3.144 - Jardim Paulistano, Sao Paulo - SP, 01452-000
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              <Link href="/institucional/termos" className="transition-colors hover:text-white">{t.footer.links.termos}</Link>
              <Link href="/institucional/privacidade" className="transition-colors hover:text-white">{t.footer.links.privacidade}</Link>
              <Link href="/institucional/seguranca" className="transition-colors hover:text-white">Seguranca</Link>
              <Link href="/institucional/faq" className="transition-colors hover:text-white">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
