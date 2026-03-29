"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { asset } from "@/constants/basePath";
import { Icon } from "@/components/ui/Icon";

const testimonials = [
  {
    name: "Lucas M.",
    role: "Empresário",
    text: "Transferi para a Europa sem pagar IOF. Em menos de 3 segundos o dinheiro já estava lá. Nunca vi nada parecido.",
    stars: 5,
    initials: "LM",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    name: "Camila R.",
    role: "Investidora",
    text: "Fazer câmbio pelo app em segundos e sem taxas absurdas mudou completamente a forma como gerencio meu dinheiro.",
    stars: 5,
    initials: "CR",
    gradient: "from-fuchsia-600 to-pink-500",
  },
  {
    name: "André S.",
    role: "Freelancer",
    text: "Recebo de clientes internacionais direto no app. Sem burocracia, sem banco intermediário, sem dor de cabeça.",
    stars: 5,
    initials: "AS",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    name: "Beatriz L.",
    role: "CEO — Startup",
    text: "A folha de pagamento internacionalizada do EAV Bank simplificou toda nossa operação com o time remoto.",
    stars: 5,
    initials: "BL",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    name: "Rafael T.",
    role: "Empresário",
    text: "A infraestrutura do EAV Bank garante execução instantânea. Já testei transferências em horários de pico e nunca falhou.",
    stars: 5,
    initials: "RT",
    gradient: "from-sky-600 to-cyan-500",
  },
  {
    name: "Juliana P.",
    role: "Nômade Digital",
    text: "Viajo por 12 países ao ano e o cartão internacional do EAV é o único que funciona em todos sem cobrar absurdos.",
    stars: 4,
    initials: "JP",
    gradient: "from-rose-600 to-red-400",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size="sm"
          className={i < count ? "text-amber-400 fill-amber-400 stroke-amber-400" : "text-stone-800 stroke-stone-800"}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={asset("/images/bg-payment.jpg")}
          alt=""
          fill
          className="object-cover object-center opacity-[0.04] sm:opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/90 via-[#0c0a09]/60 to-[#0c0a09]/90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wider text-violet-400 uppercase">
            Depoimentos
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
            Quem usa, <span className="eav-gradient-text">recomenda</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Veja o que nossos clientes falam sobre a experiência com o EAV Bank.
          </p>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white">4.9</span>
            <Stars count={5} />
          </div>
          <div className="h-8 w-px bg-white/10" />
          <span className="text-sm text-stone-400">
            Baseado em <strong className="text-stone-200">2.400+</strong> avaliações
          </span>
        </motion.div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
              className="eav-card-glass group rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/20"
            >
              <Stars count={t.stars} />
              <p className="mt-4 text-sm leading-relaxed text-stone-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                {/* Avatar with unique gradient per person + ring */}
                <div className="relative">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-xs font-bold text-white ring-2 ring-white/10 ring-offset-2 ring-offset-[#0c0a09]`}>
                    {t.initials}
                  </div>
                  {/* Verified dot */}
                  <div className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-[#0c0a09]">
                    <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
