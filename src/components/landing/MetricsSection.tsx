"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

// Animated counter hook
function useAnimatedCounter(endValue: number, duration = 2, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    const steps = 60;
    const increment = endValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, endValue, duration, startOnView]);

  return { count, ref };
}

interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: 1,
    prefix: "+",
    suffix: "M",
    label: "Clientes ativos",
    description: "Pessoas confiam no EAV Bank para suas finanças diarias",
  },
  {
    value: 150,
    prefix: "+",
    suffix: "",
    label: "Paises conectados",
    description: "Envie e receba dinheiro de qualquer lugar do mundo",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime garantido",
    description: "Infraestrutura de nivel bancario com alta disponibilidade",
  },
  {
    value: 3,
    suffix: "s",
    label: "Tempo de transferencia",
    description: "Transferencias internacionais em segundos, nao dias",
  },
];

export function MetricsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#050505]">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#050505]" />
      
      {/* Glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#6336c4]/3 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#8e59ff]/3 blur-[150px]" />

      {/* Top border */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#8e59ff]">Numeros que importam</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Resultados que falam <span className="text-gradient-primary">por si</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} reduce={reduce} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {[
            { icon: "shield", text: "Certificado PCI DSS" },
            { icon: "lock", text: "Criptografia AES-256" },
            { icon: "bank", text: "Regulado pelo Banco Central" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-3 text-neutral-500">
              {badge.icon === "shield" && (
                <svg className="h-5 w-5 text-[#6336c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              )}
              {badge.icon === "lock" && (
                <svg className="h-5 w-5 text-[#6336c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              )}
              {badge.icon === "bank" && (
                <svg className="h-5 w-5 text-[#6336c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              )}
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, reduce }: { metric: Metric; index: number; reduce: boolean | null }) {
  const { count, ref } = useAnimatedCounter(metric.value, 2);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/[0.05] bg-[#0a0a0a] p-6 sm:p-8 transition-all duration-500 hover:border-[#6336c4]/20 hover:bg-[#0a0a0a]/80"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6336c4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Value */}
        <div className="flex items-baseline gap-1">
          {metric.prefix && (
            <span className="text-4xl font-bold text-[#8e59ff] sm:text-5xl">{metric.prefix}</span>
          )}
          <span className="text-5xl font-bold text-white sm:text-6xl metric-value">
            {count}
          </span>
          <span className="text-3xl font-bold text-[#8e59ff] sm:text-4xl">{metric.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="mt-4 text-lg font-semibold text-white">{metric.label}</h3>
        
        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{metric.description}</p>
      </div>
    </motion.div>
  );
}
