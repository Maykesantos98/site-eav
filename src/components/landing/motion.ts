import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delayStep = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayStep * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
