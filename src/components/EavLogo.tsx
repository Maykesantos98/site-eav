"use client";

import Image from "next/image";
import { useState } from "react";
import { publicAssets } from "@/constants/publicAssets";

const LOGO_CHAIN = [publicAssets.logoWhite, publicAssets.logoDefault] as const;

type Props = {
  className?: string;
  /** Altura em px */
  height?: number;
};

export function EavLogo({ className = "", height = 40 }: Props) {
  const [step, setStep] = useState(0);

  if (step >= LOGO_CHAIN.length) {
    return (
      <span
        className={`inline-block font-extrabold tracking-tight text-lg sm:text-xl bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent ${className}`}
      >
        EAVBANK
      </span>
    );
  }

  const src = LOGO_CHAIN[step];
  const maxW = Math.round(height * 5);

  return (
    <div className={`relative ${className}`} style={{ height, width: maxW, maxWidth: "100%" }}>
      <Image
        src={src}
        alt="EAV Bank"
        fill
        className="object-contain object-left"
        sizes={`${maxW}px`}
        priority={step === 0}
        onError={() => setStep((s) => s + 1)}
      />
    </div>
  );
}
