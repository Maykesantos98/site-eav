"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./motion";
import { asset } from "@/constants/basePath";

const testimonials = [
  {
    name: "Lucas M.",
    role: "Empresário",
    text: "Transferi para a Europa sem pagar IOF. Em menos de 3 segundos o dinheiro já estava lá. Nunca vi nada parecido.",
    stars: 5,
    avatar: "LM",
  },
  {
    name: "Camila R.",
    role: "Investidora",
    text: "A possibilidade de trocar entre cripto e moedas fiduciárias na mesma plataforma mudou completamente minha estratégia.",
    stars: 5,
    avatar: "CR",
  },
  {
    name: "André S.",
    role: "Freelancer",
    text: "Recebo de clientes internacionais direto no app. Sem burocracia, sem banco intermediário, sem dor de cabeça.",
    stars: 5,
    avatar: "AS",
  },
  {
    name: "Beatriz L.",
    role: "CEO — Startup",
    text: "A folha de pagamento internacionalizada do EAV Bank simplificou toda nossa operação com o time remoto.",
    stars: 5,
    avatar: "BL",
  },
  {
    name: "Rafael T.",
    role: "Trader",
    text: "A Smart Chain garante execução instantânea. Já testei em horários de pico e nunca falhou. Segurança impressionante.",
    stars: 5,
    avatar: "RT",
  },
  {
    name: "Juliana P.",
    role: "Nômade Digital",
    text: "Viajo por 12 países ao ano e o cartão internacional do EAV é o único que funciona em todos sem cobrar absurdos.",
    stars: 4,
    avatar: "JP",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-stone-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6336c4] to-[#8e59ff] text-xs font-bold text-white">
                  {t.avatar}
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
