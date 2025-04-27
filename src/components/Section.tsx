import { cn } from "@/lib/utils";

interface SectionProps {
    title: string;
    children: React.ReactNode;
    noPadding?: boolean;
    darkMode?: boolean;
    className?: string;
}

export default function Section({
    title,
    children,
    noPadding,
    darkMode = false,
    className,
}: SectionProps) {
    return (
        <section className={cn("w-full", noPadding ? "" : "py-20", className)}>
            <div className="mb-12">
                <h2
                    className={cn(
                        "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
                        darkMode ? "text-white" : "text-gray-900"
                    )}
                >
                    {title}
                </h2>
            </div>

            {children}
        </section>
    );
}
