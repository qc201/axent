import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classNames from "classnames"; // Import the classnames library

type Prop = {
    phrases: string[];
    justifyPosition?: string;
    className?: string; // Allow users to pass additional className
};

export default function MaskText({ phrases, justifyPosition, className }: Prop) {
    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({
            y: "0",
            transition: {
                duration: 1.3,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true,
    });

    // Sorting phrases based on length when they enter view
    const sortedPhrases: string[] = inView
        ? [...phrases].sort((a, b) => a.length - b.length)
        : phrases;

    return (
        <div ref={ref} className={classNames(className)}>
            {sortedPhrases.map((phrase, index) => (
                <div key={index} className={`overflow-hidden flex justify-${justifyPosition}`}>
                    <motion.p
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={inView ? "enter" : ""}
                        className={classNames(className)}
                    >
                        {phrase}
                    </motion.p>
                </div>
            ))}
        </div>
    );
}