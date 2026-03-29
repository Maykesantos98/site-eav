"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/constants/LangContext";

export default function CarreirasPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        {/* Animated pulse dot */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-violet-500" />
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {isPt ? "Em breve" : "Coming soon"}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-stone-500">
          {isPt
            ? "Estamos construindo algo grande. Em breve, você poderá conferir nossas vagas e fazer parte do time que está redefinindo o futuro das finanças."
            : "We're building something big. Soon you'll be able to check our openings and join the team that's redefining the future of finance."}
        </p>

        <Link
          href="/"
          className="eav-btn-ghost mt-8 inline-flex text-sm"
        >
          {isPt ? "Voltar ao início" : "Back to home"}
        </Link>
      </motion.div>
    </div>
  );
}
