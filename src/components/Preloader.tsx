"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

export default function Preloader() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setDimension({ width, height });
    }, []);

    const initialPath = useMemo(() => {
        if (!dimension.width || !dimension.height) return "";
        return `M0 0 L${dimension.width} 0 L${dimension.width} ${
            dimension.height
        } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
            dimension.height
        } L0 0`;
    }, [dimension]);

    const targetPath = useMemo(() => {
        if (!dimension.width || !dimension.height) return "";
        return `M0 0 L${dimension.width} 0 L${dimension.width} ${
            dimension.height
        } Q${dimension.width / 2} ${dimension.height} 0 ${
            dimension.height
        } L0 0`;
    }, [dimension]);

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    const slideUp = {
        initial: {
            top: 0,
        },
        exit: {
            top: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
    };

    const opacity = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: { duration: 1, delay: 0.2 },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="h-screen w-screen flex items-center justify-center fixed z-[9999] bg-[#141516]"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="text-white text-[32px] font-light absolute z-50"
                    >
                        dohyeoplim/animations
                    </motion.p>
                    <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)]">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                            fill="#141516"
                        ></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
}
