import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function TextMaskRevealOnScroll() {
    const body = useRef(null);
    const inView = useInView(body, { once: false });

    const maskReveal = {
        initial: { y: "100%" },
        enter: {
            y: "0%",
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.1,
            },
        },
    };

    return (
        <div ref={body}>
            <div className="overflow-hidden">
                <motion.p
                    variants={maskReveal}
                    initial="initial"
                    animate={inView ? "enter" : "initial"}
                    className="text-4xl font-bold text-left"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
            </div>
        </div>
    );
}
