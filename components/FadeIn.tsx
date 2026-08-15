"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** y-offset in pixels the content animates in from */
  offset?: number;
};

/**
 * Subtle scroll-triggered fade/slide animation used throughout the site.
 * Respects reduced-motion preferences via Framer Motion's defaults.
 */
export default function FadeIn({ children, delay = 0, className, offset = 16 }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
