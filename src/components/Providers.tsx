"use client";

import { LangProvider, useLang } from "@/constants/LangContext";
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";

function AnimatedContent({ children }: { children: ReactNode }) {
  const { lang } = useLang();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <AnimatedContent>{children}</AnimatedContent>
    </LangProvider>
  );
}
