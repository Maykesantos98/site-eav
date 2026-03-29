"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "eav-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.08] bg-[#1c1917]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex sm:items-center sm:gap-6 sm:p-6">
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-stone-300">
                Utilizamos cookies para melhorar sua experiencia, personalizar conteudo e analisar nosso trafego.
                Ao continuar navegando, voce concorda com nossa{" "}
                <a href="https://eav7.com/" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline underline-offset-2 hover:text-violet-300">
                  Politica de Privacidade
                </a>{" "}
                e o uso de cookies conforme a LGPD.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 sm:mt-0 sm:flex-shrink-0">
              <button
                onClick={decline}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-stone-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition-all hover:shadow-violet-900/50"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
