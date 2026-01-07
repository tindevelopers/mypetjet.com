"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "purple";
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = "white",
  noPadding = false,
}: SectionWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    purple: "bg-purple-50",
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        backgrounds[background],
        !noPadding && "py-16 sm:py-24",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
