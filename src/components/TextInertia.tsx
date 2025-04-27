import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "motion/react";
import React, { useRef } from "react";

export default function TextInertia() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3350]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <div ref={targetRef} className="h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="min-w-full origin-bottom-left whitespace-nowrap text-7xl text-white font-black uppercase leading-[0.85] md:text-9xl"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.p>
            </div>
        </div>
    );
}
