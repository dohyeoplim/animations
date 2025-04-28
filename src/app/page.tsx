"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Preloader from "@/components/Preloader";
import TextMaskRevealOnScroll from "@/components/TextMaskRevealOnScroll";
import ColoredStripCards from "@/components/ColoredStripCards";
import Section from "@/components/Section";
import TextAlongFooter from "@/components/TextAlongFooter";
import HoverCard from "@/components/HoverCard";
import TextInertia from "@/components/TextInertia";
import HoverCard2 from "@/components/HoverCard2";
import GridCards from "@/components/GridCards1";
import CountUp from "@/components/CountUp";
import TracingCards from "@/components/TracingCards";
import TracingBeam from "@/components/TracingBeam";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const bgChangeContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: bgChangeContainerRef,
        offset: ["start end", "start start"],
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0.3, 1],
        ["#ffffff", "#000000"]
    ) as unknown as string;

    // Simulating preloading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 2000);
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <motion.div style={{ backgroundColor }} className="min-h-screen">
                <AnimatePresence mode="wait">
                    {isLoading && <Preloader />}
                </AnimatePresence>

                <main className="mx-auto px-8 flex flex-col items-center justify-center gap-30">
                    <Section title="Colored Strip Cards">
                        <ColoredStripCards />
                    </Section>

                    <Section title="Text Mask Reveal on Scroll">
                        <div className="flex flex-col items-start gap-10">
                            <TextMaskRevealOnScroll />
                            <TextMaskRevealOnScroll />
                            <TextMaskRevealOnScroll />
                        </div>
                    </Section>

                    <Section title="Count Up">
                        <CountUp />
                    </Section>

                    <Section title="Scroll Text Inertia" noPadding>
                        <div ref={bgChangeContainerRef}>
                            <TextInertia />
                        </div>
                    </Section>

                    <TracingCards />

                    <Section title="Hovering Cards" darkMode>
                        <TracingBeam bendPoint={0.5} offset={64}>
                            <div className="w-full flex items-center justify-center">
                                <div className="w-full flex flex-col items-center justify-center gap-8">
                                    <HoverCard
                                        title="Card 1"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        backgroundImage="https://images.unsplash.com/photo-1743565610781-9a03109f126a?q=80&w=3735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                    <HoverCard
                                        title="Card 2"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        backgroundImage="https://images.unsplash.com/photo-1744044041394-acefd590a9e9?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                </div>
                            </div>
                        </TracingBeam>
                    </Section>

                    <Section title="Hovering Cards 2" darkMode>
                        <HoverCard2
                            title="Card1"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            backgroundImage="https://images.unsplash.com/photo-1745404996796-a8d829f46dcc?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Section>

                    <Section title="Grid Cards 1" darkMode>
                        <GridCards />
                    </Section>
                </main>

                <TextAlongFooter />
            </motion.div>
        </ReactLenis>
    );
}
