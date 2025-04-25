"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "@/components/Preloader";

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
        <main>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <div className="w-full flex flex-col items-center justify-center p-12">
                <h1 className="text-4xl font-light">dohyeoplim/animation</h1>
            </div>

            <div className="h-screen"></div>
        </main>
    );
}
