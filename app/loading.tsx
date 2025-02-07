'use client'

import React from 'react'
import { motion } from "framer-motion";
export default function Loading() {


    const svgVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2 }
        }
    }
    return (
        <div className="z-50 min-h-screen flex items-center justify-center">
            <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="50" height="50" viewBox="0 0 189 188" fill="none" xmlns="http://www.w3.org/2000/svg">

                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    d="M5 3H44L89 76H101L146 3H184L127 94L184 185H146L101 108H89L44 185H5L66 94L5 3Z"
                    stroke="black"
                    strokeWidth="5"
                />
            </motion.svg>
        </div>
    )
}
