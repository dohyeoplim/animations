"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "motion/react";
import Preloader from "@/components/Preloader";
import TextMaskRevealOnScroll from "@/components/TextMaskRevealOnScroll";
import ColoredStripCards from "@/components/ColoredStripCards";
import Section from "@/components/Section";
import TextAlongFooter from "@/components/TextAlongFooter";
import HoverCard from "@/components/HoverCard";

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
        <ReactLenis root options={{ lerp: 0.05 }}>
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

                <Section title="Hovering Cards">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Card 1 */}
                        <div className="col-span-2 md:col-span-1">
                            <HoverCard
                                title="Card 1"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                backgroundImage="https://images.unsplash.com/photo-1743565610781-9a03109f126a?q=80&w=3735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>

                        {/* Card 2 */}
                        <div>
                            <HoverCard
                                title="Card 2"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                backgroundImage="https://images.unsplash.com/photo-1745425814434-28f5437b4dcf?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>

                        {/* Card 3 */}
                        <div>
                            <HoverCard
                                title="Card 3"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                backgroundImage="https://images.unsplash.com/photo-1744044041394-acefd590a9e9?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                    </div>
                </Section>
            </main>

            <TextAlongFooter />
        </ReactLenis>
    );
}
