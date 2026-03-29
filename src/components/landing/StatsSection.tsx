"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useLang } from "@/constants/LangContext";
import { asset } from "@/constants/basePath";

function AnimatedNumber({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(eased * end);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  /* Heroicons 20 solid */
  const stats = [
    { end: 150, suffix: "+", label: t.stats.paises, icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.001A11.17 11.17 0 0010 14c1.588 0 3.07-.395 4.373-1.082A6.472 6.472 0 0016.5 10z" },
    { end: 0, suffix: "%", label: t.stats.iof, icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46C8.363 14.45 9.404 15 10.5 15s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z" },
    { end: 3, suffix: "s", prefix: "<", label: t.stats.tempo, icon: "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" },
    { end: 24, suffix: "/7", label: t.stats.disponibilidade, icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={asset("/images/person-travel.jpg")} alt="" fill className="object-cover opacity-[0.18] sm:opacity-[0.25] lg:opacity-[0.30]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0c0a09]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/60 via-transparent to-[#0c0a09]/70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" aria-hidden />

      <div className="eav-divider mx-auto max-w-4xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="eav-card-glass group relative rounded-2xl p-6 text-center transition-all duration-300 sm:p-8"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                <svg className="h-6 w-6 text-violet-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d={stat.icon} clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <AnimatedNumber end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mt-2 text-sm text-stone-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="relative mx-auto mt-16 max-w-4xl px-5 sm:mt-20 sm:px-8">
        <div className="eav-divider" />
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10"
        >
          {[
            { icon: "M9.661 2.237a.75.75 0 01.678 0 17.683 17.683 0 006.397 2.01.75.75 0 01.592.726c.147 3.256-.373 5.927-1.534 8.014C14.666 15.063 13.03 16.39 10 18c-3.03-1.61-4.666-2.937-5.794-5.013C3.066 10.9 2.546 8.229 2.672 4.973a.75.75 0 01.592-.726 17.683 17.683 0 006.397-2.01z", text: t.stats.badgeSeg },
            { icon: "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z", text: t.stats.badgeBlock },
            { icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.001A11.17 11.17 0 0010 14c1.588 0 3.07-.395 4.373-1.082A6.472 6.472 0 0016.5 10z", text: t.stats.badgeGlobal },
            { icon: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z", text: t.stats.badgeCripto },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-xs text-stone-500 sm:text-sm">
              <svg className="h-5 w-5 flex-shrink-0 text-violet-400/60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d={badge.icon} clipRule="evenodd" />
              </svg>
              {badge.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
