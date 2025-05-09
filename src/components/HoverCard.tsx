"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

type HoverCardProps = {
    title: string;
    description: string;
    backgroundImage: string;
};

export default function HoverCard({
    title,
    description,
    backgroundImage,
}: HoverCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const updateCard = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            const rotateX = (-y / rect.height) * 6;
            const rotateY = (x / rect.width) * 6;

            gsap.to(card, {
                x: x * 0.08,
                y: y * 0.08,
                rotateX,
                rotateY,
                ease: "power1.out",
                duration: 0.2,
                overwrite: "auto",
            });
        };

        const handleMouseEnter = (e: MouseEvent) => {
            setIsHovered(true);
            updateCard(e);
        };

        const handleMouseMove = (e: MouseEvent) => {
            updateCard(e);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            gsap.to(card, {
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.out",
                duration: 0.3,
                overwrite: "auto",
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "relative group w-full aspect-[2/1] md:rounded-lg rounded-md overflow-hidden shadow-xl border border-neutral-800 bg-cover bg-center cursor-pointer",
                "transition-colors duration-500"
            )}
            style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                className="absolute inset-0 bg-black/40 z-10"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 pointer-events-none">
                <motion.h2
                    className="text-lg md:text-xl lg:text-2xl font-bold text-white pointer-events-auto"
                    animate={{
                        y: isHovered ? -10 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-sm md:text-base text-white/90 overflow-hidden pointer-events-auto"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                        y: isHovered ? 0 : 10, // soft floating effect
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.05,
                    }}
                    style={{ overflowWrap: "break-word" }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    );
}
