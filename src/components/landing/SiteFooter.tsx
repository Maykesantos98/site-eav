"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EavLogo } from "@/components/EavLogo";
import { useLang } from "@/constants/LangContext";
import basePath from "@/constants/basePath";

export function SiteFooter() {
  const { t } = useLang();
  const home = basePath || "/";
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/[0.06]"
    >
      {/* ═══ CTA Banner ═══ */}
      <div id="conta" className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6336c4]/12 via-[#0c0a09] to-[#b336c1]/8" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-[#8e59ff]/8 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h3 className="text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl">
            {t.footer.ctaTitle1}<span className="eav-gradient-text">{t.footer.ctaTitleHighlight}</span>?
          </h3>
          <p className="mt-4 text-sm leading-[1.7] text-stone-400 sm:text-base">
            {t.footer.ctaDesc}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const hp = (e.currentTarget.elements.namedItem("company") as HTMLInputElement)?.value;
              if (hp) return;
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 2000);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input type="text" name="company" autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" />
            <input type="email" required maxLength={254} placeholder="Seu melhor e-mail" className="eav-input flex-1 sm:py-4" />
            <button
              type="submit"
              disabled={submitted}
              className={`eav-btn-primary px-7 py-3.5 sm:py-4 ${submitted ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {submitted ? "Em breve!" : t.footer.ctaBtn}
              {!submitted && (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </button>
          </form>
          <p className="mt-4 text-[11px] text-stone-600">
            Ao se cadastrar, você concorda com nossos{" "}
            <Link href="/institucional/termos" className="underline decoration-stone-700 hover:text-stone-400 transition-colors">Termos de Uso</Link>{" "}e{" "}
            <Link href="/institucional/privacidade" className="underline decoration-stone-700 hover:text-stone-400 transition-colors">Política de Privacidade</Link>.
          </p>
        </div>
      </div>

      {/* ═══ Main footer ═══ */}
      <div className="bg-[#060504]">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8">

          {/* ── Top: Logo + Links grid ── */}
          <div className="grid gap-12 lg:grid-cols-12">

            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link href="/">
                <EavLogo height={36} />
              </Link>
              <p className="mt-4 max-w-[260px] text-[13px] leading-[1.7] text-stone-500">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-stone-500 transition-all duration-200 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-violet-400"
                    aria-label={social.label}
                  >
                    <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24">{social.svg}</svg>
                  </a>
                ))}
              </div>

              {/* App badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { store: t.app.appStore, sub: t.app.availableOn1, icon: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /> },
                  { store: t.app.googlePlay, sub: t.app.availableOn2, icon: <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" /> },
                ].map((app) => (
                  <a key={app.store} href="https://eav7.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 transition-all hover:border-violet-500/15 hover:bg-violet-500/[0.03]"
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">{app.icon}</svg>
                    <div>
                      <div className="text-[9px] leading-tight text-stone-600">{app.sub}</div>
                      <div className="text-[11px] font-bold leading-tight text-stone-300">{app.store}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
              {/* Produto */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase">{t.footer.produto}</h4>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { label: t.footer.links.contaDigital, href: `${home}#conta` },
                    { label: t.footer.links.cartao, href: `${home}#cartoes` },
                    { label: t.footer.links.contaPJ, href: `${home}#empresas` },
                    { label: t.footer.links.empresas, href: `${home}#empresas` },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[13px] text-stone-600 transition-colors hover:text-stone-300">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recursos */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase">{t.footer.recursos}</h4>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { label: t.footer.links.pix, href: `${home}#solucoes` },
                    { label: t.footer.links.transferencias, href: `${home}#solucoes` },
                    { label: t.footer.links.investimentos, href: `${home}#solucoes` },
                    { label: t.footer.links.cambio, href: `${home}#solucoes` },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[13px] text-stone-600 transition-colors hover:text-stone-300">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institucional */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase">{t.footer.institucional}</h4>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { label: t.footer.links.sobre, href: "/institucional/sobre" },
                    { label: t.footer.links.contato, href: "/institucional/contato" },
                    { label: t.footer.links.termos, href: "/institucional/termos" },
                    { label: t.footer.links.privacidade, href: "/institucional/privacidade" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[13px] text-stone-600 transition-colors hover:text-stone-300">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suporte */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase">Suporte</h4>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { label: "Perguntas frequentes", href: "/institucional/faq" },
                    { label: "Segurança", href: "/institucional/seguranca" },
                    { label: "Ouvidoria", href: "/institucional/ouvidoria" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[13px] text-stone-600 transition-colors hover:text-stone-300">{link.label}</Link>
                    </li>
                  ))}
                  <li>
                    <span className="text-[13px] text-stone-700">
                      DPO: <span className="text-violet-400/70">dpo@eavbank.com</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Contato / SAC ── */}
          <div className="mt-12 grid gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
            {[
              { title: "SAC", info: "Em breve", sub: "Atendimento 24h, 7 dias por semana" },
              { title: "Ouvidoria", info: "Em breve", sub: "Dias úteis, 9h às 18h (Brasília)" },
              { title: "Atendimento em Libras", info: "Em breve", sub: "Atendimento 24h, 7 dias por semana" },
              { title: "Encarregado de Dados (DPO)", info: "dpo@eavbank.com", sub: "LGPD", isDpo: true },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-[11px] font-semibold text-stone-300">{item.title}</p>
                <p className={`mt-1 text-[12px] ${"isDpo" in item && item.isDpo ? "text-violet-400/80" : "text-stone-500 italic"}`}>{item.info}</p>
                <p className="mt-0.5 text-[10px] text-stone-700">
                  {"isDpo" in item && item.isDpo ? (
                    <Link href="/institucional/privacidade" className="underline decoration-stone-800 hover:text-stone-500 transition-colors">{item.sub}</Link>
                  ) : item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* ── Regulatory ── */}
          <div className="mt-8 border-t border-white/[0.04] pt-6">
            <p className="max-w-4xl text-[10px] leading-[1.9] text-stone-700">
              O EAV Bank é uma plataforma de serviços financeiros digitais operada pela EAV7 Tecnologia e Pagamentos Ltda.
              As operações de câmbio e transferências internacionais estão sujeitas à regulamentação vigente do Banco Central do Brasil.
              Os serviços financeiros são prestados pela EAV7 Tecnologia e Pagamentos Ltda.
              Investimentos envolvem riscos. Rentabilidade passada não garante resultados futuros.
            </p>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/[0.04] py-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-stone-600">
                &copy; {new Date().getFullYear()} EAV7 Tecnologia e Pagamentos Ltda. {t.footer.copyright}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-stone-600">
                <Link href="/institucional/termos" className="transition-colors hover:text-stone-400">{t.footer.links.termos}</Link>
                <Link href="/institucional/privacidade" className="transition-colors hover:text-stone-400">{t.footer.links.privacidade}</Link>
                <Link href="/institucional/seguranca" className="transition-colors hover:text-stone-400">Segurança</Link>
                <Link href="/institucional/faq" className="transition-colors hover:text-stone-400">FAQ</Link>
              </div>
            </div>
            <p className="text-[10px] text-stone-700">
              CNPJ 65.789.137/0001-12 · Av. Brig. Faria Lima, 3.144 — Jardim Paulistano, São Paulo — SP, 01452-000
            </p>
          </div>

        </div>
      </div>
    </motion.footer>
  );
}
