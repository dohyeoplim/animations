"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type TracingBeamProps = {
    position?: "left" | "right";
    offset?: number;
    bendPoint?: number;
    children: React.ReactNode;
    className?: string;
};

export default function TracingBeam({
    position = "left",
    offset = 16,
    bendPoint = 0.8,
    children,
    className,
}: TracingBeamProps) {
    const gradientId = useId();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const basePath = `M1 0 V -36 l 18 24 V ${
        svgHeight * bendPoint
    } l -18 24 V ${svgHeight}`;

    const beamStyle: React.CSSProperties = {
        position: "absolute",
        top: "0.75rem",
        [position]: `-${offset}px`,
        pointerEvents: "none",
    };

    return (
        <motion.div
            ref={ref}
            className={cn(
                "relative mx-auto h-full w-full max-w-4xl",
                className
            )}
        >
            <div style={beamStyle}>
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    aria-hidden="true"
                >
                    <g
                        transform={
                            position === "right"
                                ? `scale(-1 1) translate(-20 0)`
                                : undefined
                        }
                    >
                        <motion.path
                            d={basePath}
                            fill="none"
                            stroke="#FF7710"
                            strokeOpacity="0.16"
                            transition={{ duration: 2 }}
                        />
                        <motion.path
                            d={basePath}
                            fill="none"
                            stroke={`url(#gradient-${gradientId})`}
                            strokeWidth="1.25"
                            className="motion-reduce:hidden"
                            transition={{ duration: 2 }}
                        />
                        <defs>
                            <motion.linearGradient
                                id={`gradient-${gradientId}`}
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                x2="0"
                                y1={y1}
                                y2={y2}
                            >
                                <stop stopColor="#FF7710" stopOpacity="0" />
                                <stop
                                    offset="0.5"
                                    stopColor="#FF7710"
                                    stopOpacity="1"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#FF7710"
                                    stopOpacity="0"
                                />
                            </motion.linearGradient>
                        </defs>
                    </g>
                </svg>
            </div>

            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
}
