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

    const startRadius = useTransform(scrollYProgress, [0, 1], ["10%", "30%"]);
    const middle1Radius = useTransform(scrollYProgress, [0, 1], ["20%", "40%"]);
    const middle2Radius = useTransform(scrollYProgress, [0, 1], ["35%", "60%"]);
    const endRadius = useTransform(scrollYProgress, [0, 1], ["50%", "80%"]);

    const backgroundOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0, 1, 1, 0]
    );

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3350]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <div ref={targetRef} className="h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
                    style={{
                        backgroundImage: useTransform(
                            [
                                startRadius,
                                middle1Radius,
                                middle2Radius,
                                endRadius,
                            ],
                            ([start, middle1, middle2, end]) =>
                                `radial-gradient(circle at top center,
                                    rgba(255,123,0,0.6) ${start},
                                    rgba(255,123,0,0.4) ${middle1},
                                    rgba(255,123,0,0.2) ${middle2},
                                    transparent ${end})`
                        ),
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                        opacity: backgroundOpacity,
                    }}
                />
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
