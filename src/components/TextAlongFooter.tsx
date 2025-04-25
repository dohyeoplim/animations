"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
    useSpring,
} from "motion/react";

export default function TextAlongFooter() {
    const container = useRef<HTMLDivElement>(null);
    const paths = useRef<Array<SVGTextPathElement>>([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const animatedProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });

    useEffect(() => {
        const unsubscribe = animatedProgress.on("change", (e) => {
            paths.current.forEach((path, i) => {
                const wave = Math.sin(e * Math.PI * 2 + i) * 10;
                path?.setAttribute("startOffset", `${i * 20 + wave}%`);
            });
        });
        return () => unsubscribe();
    }, []);

    return (
        <div ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <defs>
                    <linearGradient
                        id="gradient"
                        gradientTransform="rotate(90)"
                    >
                        <stop offset="0%" stopColor="#999999" />
                        <stop offset="100%" stopColor="#555555" />
                    </linearGradient>
                </defs>
                <path
                    fill="none"
                    id="curve"
                    d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
                />
                <text className="text-[4px] font-semibold">
                    {[...Array(5)].map((_, i) => (
                        <textPath
                            key={i}
                            ref={(el) => {
                                if (el) paths.current[i] = el;
                            }}
                            startOffset={`${i * 20}%`}
                            href="#curve"
                            style={{
                                fill: "url(#gradient)",
                                transition: "fill 0.3s ease",
                            }}
                        >
                            dohyeoplim/animations
                        </textPath>
                    ))}
                </text>
            </svg>

            <FooterContent scrollProgress={animatedProgress} />
        </div>
    );
}

function FooterContent({
    scrollProgress,
}: {
    scrollProgress: MotionValue<number>;
}) {
    const y = useTransform(scrollProgress, [0, 1], [-300, 0]);
    const rotate = useTransform(scrollProgress, [0, 1], [15, 0]);
    const scale = useTransform(scrollProgress, [0, 1], [0.9, 1]);

    return (
        <div className="h-[500px] bg-gradient-to-b from-[#111] via-[#0d0d0d] to-[#111] overflow-hidden">
            <motion.div
                style={{ y }}
                className="h-full flex justify-center items-center gap-10 p-10"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            rotate,
                            scale,
                        }}
                        className="w-[80px] h-[80px] rounded-xl bg-neutral-100 hover:bg-neutral-700 transition-colors duration-300 shadow-md flex items-center justify-center"
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
