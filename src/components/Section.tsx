interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="w-full py-20">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                    {title}
                </h2>
            </div>

            {children}
        </section>
    );
}
