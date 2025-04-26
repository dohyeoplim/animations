import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export default function CountUp() {
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row">
            <Stat
                num={45}
                suffix="%"
                subheading="Lorem ipsum dolor sit amet consectetur"
            />
            <Stat
                num={15.5}
                decimals={1}
                suffix="K+"
                subheading="Lorem ipsum dolor sit amet consectetur"
            />
            <Stat
                num={20.3}
                decimals={1}
                suffix="%"
                subheading="Lorem ipsum dolor sit amet consectetur"
            />
        </div>
    );
}

type StatProps = {
    num: number;
    suffix: string;
    decimals?: number;
    subheading: string;
};

function Stat({ num, suffix, decimals = 0, subheading }: StatProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center font-mono text-7xl font-semibold sm:text-6xl tracking-tighter">
                <span ref={ref}></span>
                <span className="text-4xl font-md"> {suffix}</span>
            </p>
            <p className="max-w-48 text-center text-neutral-600">
                {subheading}
            </p>
        </div>
    );
}
