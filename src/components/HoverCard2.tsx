import { motion } from "motion/react";

type HoverCard2Props = {
    title: string;
    description: string;
    backgroundImage: string;
};

export default function HoverCard2({
    title,
    description,
    backgroundImage,
}: HoverCard2Props) {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.035,
            }}
            whileHover="hover"
            className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative rounded-lg"
        >
            <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <div>
                    {title.split("").map((l, i) => (
                        <ShiftLetter letter={l} key={i} />
                    ))}
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

const ShiftLetter = ({ letter }: { letter: string }) => {
    return (
        <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
            <motion.span
                className="flex flex-col min-w-[4px]"
                style={{
                    y: "0%",
                }}
                variants={{
                    hover: {
                        y: "-50%",
                    },
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );
};
