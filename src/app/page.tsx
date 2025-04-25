"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "@/components/Preloader";
import TextMaskRevealOnScroll from "@/components/TextMaskRevealOnScroll";
import ColoredStripCards from "@/components/ColoredStripCards";
import Section from "@/components/Section";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulating preloading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 2000);
    }, []);

    return (
        <div>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>

            <main className="mx-auto px-8 flex flex-col items-center justify-center gap-30 overflow-hidden">
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
            </main>
        </div>
    );
}
