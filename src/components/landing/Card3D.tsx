"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { publicAssets } from "@/constants/publicAssets";

/* ─────────── 3 Cards ─────────── */

const cards = [
  {
    id: "graphene",
    label: "Graphene",
    sublabel: "O essencial sem limites",
    src: publicAssets.cardGraphene,
    alt: "Cartão EAV Bank Graphene",
    glowColor: "rgba(180,180,180,0.14)",
    shadowColor: "rgba(120,120,120,0.35)",
  },
  {
    id: "eav",
    label: "EAV Bank",
    sublabel: "O cartão que redefine tudo",
    src: publicAssets.cardEav,
    alt: "Cartão EAV Bank Purple",
    glowColor: "rgba(168,85,247,0.25)",
    shadowColor: "rgba(139,92,246,0.45)",
  },
  {
    id: "grabtium",
    label: "Grabtium",
    sublabel: "Exclusividade e poder",
    src: publicAssets.cardGrabtium,
    alt: "Cartão EAV Bank Grabtium",
    glowColor: "rgba(130,70,210,0.2)",
    shadowColor: "rgba(110,60,190,0.4)",
  },
] as const;

/* Fan: esquerda, centro (frente), direita */
const fanConfig = [
  { rotate: -16, xBase: -140, yBase: 20 },
  { rotate: 0, xBase: 0, yBase: -15 },
  { rotate: 16, xBase: 140, yBase: 20 },
];

/* ─────────── Single 3D Card ─────────── */

function SingleCard({
  card,
  index,
  hoveredId,
  setHoveredId,
}: {
  card: (typeof cards)[number];
  index: number;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = hoveredId === card.id;
  const otherHovered = hoveredId !== null && !isHovered;
  const fan = fanConfig[index];

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const spring = { damping: 14, stiffness: 120, mass: 0.35 };
  const rx = useSpring(useTransform(my, [0, 1], [18, -18]), spring);
  const ry = useSpring(useTransform(mx, [0, 1], [-18, 18]), spring);
  const gx = useSpring(useTransform(mx, [0, 1], [0, 100]), spring);
  const gy = useSpring(useTransform(my, [0, 1], [0, 100]), spring);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [reduce, mx, my],
  );

  const onLeave = useCallback(() => {
    setHoveredId(null);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my, setHoveredId]);

  // Idle sway
  const idleRot = useMotionValue(0);
  const smoothIdle = useSpring(idleRot, { damping: 35, stiffness: 50 });

  useEffect(() => {
    if (reduce) return;
    let raf: number;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const s = (ts - t0) / 1000;
      if (!isHovered) idleRot.set(Math.sin(s * 0.25 + index * 2) * 4);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isHovered, reduce, idleRot, index]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 80, scale: 0.75, rotateZ: fan.rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: fan.rotate }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 1,
        delay: 0.1 + index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        x: isHovered ? fan.xBase * 1.2 : fan.xBase,
        y: isHovered ? -40 : fan.yBase,
        rotateZ: isHovered ? 0 : fan.rotate,
        scale: isHovered ? 1.22 : otherHovered ? 0.85 : 1,
        opacity: otherHovered ? 0.35 : 1,
        filter: otherHovered
          ? "brightness(0.4) saturate(0.5)"
          : "brightness(1) saturate(1)",
      }}
      className="absolute"
      style={{
        zIndex: isHovered ? 20 : index === 1 ? 5 : index === 2 ? 3 : 2,
        perspective: "1400px",
      }}
    >
      {/* Big glow behind */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
        style={{ background: card.glowColor }}
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 1 : otherHovered ? 0.1 : 0.35,
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => !reduce && setHoveredId(card.id)}
        onMouseLeave={onLeave}
        style={{
          rotateX: isHovered ? rx : 0,
          rotateY: isHovered ? ry : smoothIdle,
          transformStyle: "preserve-3d",
        }}
        className="cursor-pointer"
      >
        {/* Float */}
        <motion.div
          animate={reduce ? {} : { y: [0, -10, 0] }}
          transition={{
            duration: 4 + index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* ── CARD IMAGE — BIGGER ── */}
          <div className="relative w-[280px] sm:w-[340px] lg:w-[420px]">
            <Image
              src={card.src}
              alt={card.alt}
              width={840}
              height={530}
              className="h-auto w-full object-contain"
              style={{
                filter: `drop-shadow(0 20px 45px ${card.shadowColor})`,
              }}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
              priority={index === 1}
            />

            {/* Glare */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: useTransform(
                  [gx, gy] as MotionValue[],
                  ([x, y]: number[]) =>
                    `radial-gradient(ellipse at ${x}% ${y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 18%, transparent 48%)`,
                ),
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.35s ease",
              }}
            />
          </div>

          {/* Shadow on floor */}
          <motion.div
            className="absolute -bottom-5 left-[8%] right-[8%] h-10 rounded-full blur-2xl"
            style={{
              background: card.shadowColor,
              scaleX: useTransform(ry, [-18, 0, 18], [0.82, 1, 0.82]),
              x: useTransform(ry, [-18, 0, 18], [14, 0, -14]),
            }}
            animate={{ opacity: isHovered ? 0.6 : 0.2 }}
          />
        </motion.div>
      </motion.div>

    </motion.div>
  );
}

/* ─────────── Glass frames ─────────── */

function GlassFrames() {
  const reduce = useReducedMotion();
  const frames = [
    { w: 220, h: 155, x: "-6%", y: "5%", rotate: -10, dur: 32 },
    { w: 200, h: 140, x: "88%", y: "2%", rotate: 14, dur: 36 },
    { w: 170, h: 120, x: "92%", y: "55%", rotate: 24, dur: 28 },
    { w: 150, h: 105, x: "-7%", y: "62%", rotate: -20, dur: 30 },
    { w: 110, h: 80, x: "40%", y: "-9%", rotate: 6, dur: 24 },
    { w: 95, h: 68, x: "44%", y: "94%", rotate: -8, dur: 27 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {frames.map((f, i) => (
        <motion.div
          key={i}
          initial={reduce ? { opacity: 0.2 } : { opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          animate={
            reduce
              ? {}
              : {
                  rotateZ: [f.rotate, f.rotate + 6, f.rotate - 6, f.rotate],
                }
          }
          transition={{
            rotateZ: {
              duration: f.dur,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 1.2, delay: 0.2 + i * 0.1 },
            scale: { duration: 1.2, delay: 0.2 + i * 0.1 },
          }}
          className="absolute"
          style={{
            left: f.x,
            top: f.y,
            width: f.w,
            height: f.h,
            borderRadius: "18px",
            border: "1.5px solid rgba(139,92,246,0.1)",
            background:
              "linear-gradient(135deg, rgba(139,92,246,0.03) 0%, rgba(236,72,153,0.015) 100%)",
            boxShadow: "0 0 20px rgba(139,92,246,0.025)",
          }}
        />
      ))}
      {/* Swirl */}
      <div
        className="absolute left-[3%] top-[8%] h-[84%] w-[94%]"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(139,92,246,0.08) 0%, transparent 42%), radial-gradient(ellipse at 75% 50%, rgba(236,72,153,0.06) 0%, transparent 42%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

/* ─────────── Exported ─────────── */

export function Card3DHero() {
  const reduce = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full max-w-[960px] py-4 sm:py-8 lg:max-w-[1100px] lg:py-10"
    >
      {/* Deep glows */}
      <div
        className="absolute inset-x-0 top-[20%] h-[280px] rounded-full bg-[#7c3aed]/7 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute inset-x-16 bottom-16 h-[100px] rounded-full bg-[#a855f7]/5 blur-[70px]"
        aria-hidden
      />

      <GlassFrames />

      {/* Cards — taller container for bigger cards */}
      <div className="relative mx-auto flex h-[340px] items-center justify-center sm:h-[420px] lg:h-[500px]">
        {cards.map((card, i) => (
          <SingleCard
            key={card.id}
            card={card}
            index={i}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>

      {/* Particles */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[
            { s: 3, x: "2%", y: "12%", d: 0, dur: 6, c: "#a78bfa" },
            { s: 2.5, x: "97%", y: "8%", d: 1.2, dur: 5, c: "#c084fc" },
            { s: 4, x: "3%", y: "88%", d: 2, dur: 7, c: "#f0abfc" },
            { s: 2, x: "98%", y: "85%", d: 0.7, dur: 4.5, c: "#a78bfa" },
            { s: 3, x: "50%", y: "1%", d: 1.8, dur: 5.5, c: "#c084fc" },
            { s: 2.5, x: "50%", y: "98%", d: 3, dur: 6, c: "#f0abfc" },
            { s: 2, x: "25%", y: "50%", d: 0.4, dur: 5, c: "#818cf8" },
            { s: 2, x: "75%", y: "45%", d: 2.5, dur: 4.8, c: "#e879f9" },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.s,
                height: p.s,
                left: p.x,
                top: p.y,
                background: p.c,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.08, 0.45, 0.08],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.d,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkles */}
      <motion.div
        animate={
          reduce
            ? {}
            : {
                rotate: [0, 180, 360],
                scale: [0.7, 1.4, 0.7],
                opacity: [0.12, 0.4, 0.12],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-[2%]"
      >
        <svg
          className="h-7 w-7 text-violet-300/30 sm:h-8 sm:w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74z" />
        </svg>
      </motion.div>
      <motion.div
        animate={
          reduce
            ? {}
            : {
                rotate: [360, 180, 0],
                scale: [0.5, 1.1, 0.5],
                opacity: [0.08, 0.25, 0.08],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute left-[4%] top-8"
      >
        <svg
          className="h-5 w-5 text-violet-300/20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
