"use client";
import { motion, useAnimation } from "framer-motion";
import className from "classnames";
import { useEffect } from "react";
import { useRouter } from "next/router";
export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 2000 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeOut", duration: 2 }}
    exit={{ opacity: 0, x: 2000 }}
  >
    {children}
  </motion.div>
);
