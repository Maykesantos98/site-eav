"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EavLogo } from "@/components/EavLogo";
import { useLang } from "@/constants/LangContext";

export function SiteFooter() {
  const { t } = useLang();

  const footerLinks = {
    [t.footer.produto]: [
      { label: t.footer.links.contaDigital, href: "#conta" },
      { label: t.footer.links.cartao, href: "#solucoes" },
      { label: t.footer.links.smartChain, href: "#seguranca" },
      { label: t.footer.links.empresas, href: "#empresas" },
    ],
    [t.footer.recursos]: [
      { label: t.footer.links.pix, href: "#solucoes" },
      { label: t.footer.links.transferencias, href: "#solucoes" },
      { label: t.footer.links.cripto, href: "#solucoes" },
      { label: t.footer.links.cambio, href: "#solucoes" },
    ],
    [t.footer.institucional]: [
      { label: t.footer.links.sobre, href: "https://eav7.com/" },
      { label: t.footer.links.contato, href: "https://eav7.com/" },
      { label: t.footer.links.termos, href: "https://eav7.com/" },
      { label: t.footer.links.privacidade, href: "https://eav7.com/" },
    ],
  };
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/[0.06]"
    >
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#6336c4]/15 via-[#8e59ff]/10 to-[#b336c1]/15 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[#0c0a09]/60" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            {t.footer.ctaTitle1}<span className="eav-gradient-text">{t.footer.ctaTitleHighlight}</span>?
          </h3>
          <p className="mt-4 text-sm text-stone-400 sm:text-lg">
            {t.footer.ctaDesc}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#conta"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-8 py-4 text-base font-bold text-white shadow-xl shadow-violet-950/50 transition-shadow hover:shadow-violet-900/60"
            >
              {t.footer.ctaBtn}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-[#080706] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <EavLogo height={48} />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
                {t.footer.brandDesc}
              </p>
              {/* Social links */}
              <div className="mt-6 flex gap-3">
                {[
                  { label: "Instagram", svg: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
                  { label: "X", svg: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                  { label: "LinkedIn", svg: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="https://eav7.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-stone-500 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                    aria-label={social.label}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>

              {/* App Store buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://eav7.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 transition-all hover:border-violet-500/20 hover:bg-violet-500/5"
                >
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-tight text-stone-500">{t.app.availableOn1}</div>
                    <div className="text-xs font-bold leading-tight text-white">{t.app.appStore}</div>
                  </div>
                </a>
                <a
                  href="https://eav7.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 transition-all hover:border-violet-500/20 hover:bg-violet-500/5"
                >
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.09l-2.302 2.303L5.864 2.658z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-tight text-stone-500">{t.app.availableOn2}</div>
                    <div className="text-xs font-bold leading-tight text-white">{t.app.googlePlay}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-500 transition-colors hover:text-violet-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
            <p className="text-xs text-stone-600">
              &copy; {new Date().getFullYear()} EAV Bank. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-600">
              <Link href="https://eav7.com/" className="transition-colors hover:text-stone-400">
                {t.footer.links.termos}
              </Link>
              <Link href="https://eav7.com/" className="transition-colors hover:text-stone-400">
                {t.footer.links.privacidade}
              </Link>
              <Link href="https://eav7.com/" className="transition-colors hover:text-stone-400">
                {t.footer.links.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
