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
                  { label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
                  { label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                  { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="https://eav7.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-stone-500 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                    aria-label={social.label}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                    </svg>
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
