"use client";

import { LangProvider } from "@/constants/LangContext";
import { type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
