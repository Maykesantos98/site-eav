"use client";

import { useState, useEffect, useRef } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();

    const debounced = () => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(check, 150);
    };

    window.addEventListener("resize", debounced, { passive: true });
    return () => {
      clearTimeout(timeout.current);
      window.removeEventListener("resize", debounced);
    };
  }, [breakpoint]);

  return isMobile;
}
