"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
          className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.08] bg-[#1c1917]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex sm:items-center sm:gap-6 sm:p-6">
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-stone-300">
                Utilizamos cookies para melhorar sua experiencia, personalizar conteudo e analisar nosso trafego.
                Ao continuar navegando, voce concorda com nossa{" "}
                <Link href="/institucional/privacidade" className="text-violet-400 underline underline-offset-2 hover:text-violet-300">
                  Politica de Privacidade
                </Link>{" "}
                e o uso de cookies conforme a LGPD.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2.5 sm:mt-0 sm:flex-shrink-0">
              <button
                onClick={decline}
                className="eav-btn-ghost px-4 py-2.5 text-sm sm:px-5"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="eav-btn-primary px-4 py-2.5 text-sm sm:px-5"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
