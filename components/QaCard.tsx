"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Props = {
  question: string;
  answer: string;
};
export default function QaCard({ question, answer }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      onClick={() => setIsVisible(!isVisible)}
      className=" cursor-pointer flex flex-col relative shadow-lg font-custom text-primary  sm:m-5 m-4"
    >
      <div className="flex flex-row">
        <div className="font-black sm:text-xl text-lg">{question}</div>
        <motion.span whileTap={{ y: 1 }} className="absolute -right-5  top-1 ">
          <Image
            src={
              isVisible
                ? "/icons/plus-circle-svgrepo-com.svg"
                : "/icons/close-circle-svgrepo-com.svg"
            }
            alt="Example Icon"
            width={isVisible ? "22" : "25"}
            height={isVisible ? "22" : "25"}
            loading="eager"
          />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          />
        ) : (
          <div className="sm:text-lg text-md font-thin sm:mt-5">{answer}</div>
        )}
      </AnimatePresence>
    </div>
  );
}
