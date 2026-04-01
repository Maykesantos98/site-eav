"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

function MarqueeRow({ items, direction = 1, speed = 30 }: { items: readonly string[]; direction?: 1 | -1; speed?: number }) {
  const reduce = useReducedMotion();
  const duration = (items.length * speed) / 10;

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex flex-shrink-0 gap-4"
        animate={reduce ? {} : { x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 text-sm font-medium tracking-wide text-stone-400 whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6336c4]/40" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function MarqueeSection() {
  const { t } = useLang();

  return (
    <section className="overflow-hidden py-10 sm:py-14">
      <div className="space-y-4">
        <MarqueeRow items={t.marquee} direction={1} speed={35} />
        <MarqueeRow items={t.marquee} direction={-1} speed={28} />
      </div>
    </section>
  );
}
