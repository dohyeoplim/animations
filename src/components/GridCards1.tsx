"use client";

type CardProps = {
    title: string;
    description: string;
    cornerCaption: string;
};

export default function GridCards() {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-neutral-300 border border-neutral-300">
                <TitleCard />
                <Card
                    title="Card 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cornerCaption="cornerCaption"
                />
                <Card
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cornerCaption="cornerCaption"
                />
            </div>

            <GridRow>
                <Card
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cornerCaption="cornerCaption"
                />
                <Card
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cornerCaption="cornerCaption"
                />
                <Card
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cornerCaption="cornerCaption"
                />
            </GridRow>
        </div>
    );
}

function GridRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-neutral-300 border-x border-b border-neutral-300">
            {children}
        </div>
    );
}

function Card({ title, description, cornerCaption }: CardProps) {
    return (
        <div className="group relative flex h-56 md:h-80 flex-col justify-end overflow-hidden p-6 md:p-9 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-500">
            <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-200">
                <span>{cornerCaption}</span>
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end overflow-hidden">
                <h2 className="relative z-10 text-3xl font-semibold leading-tight text-neutral-100 transition-transform duration-500 group-hover:-translate-y-3">
                    {title}
                </h2>

                <p className="relative z-10 mt-2 text-sm text-neutral-400 transition-transform duration-500 group-hover:-translate-y-3">
                    {description}
                </p>
            </div>

            <Corners />
        </div>
    );
}

function TitleCard() {
    return (
        <div className="group relative flex h-56 md:h-80 flex-col justify-between bg-neutral-800 p-6 md:p-9 hover:bg-neutral-700 transition-colors duration-500">
            <h2 className="text-4xl font-bold uppercase leading-tight text-neutral-200">
                <span className="text-neutral-400 transition-colors duration-500 group-hover:text-neutral-100">
                    This is a
                </span>
                <br />
                Title Card
            </h2>
            <div className="flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300">
                <span>cornerCaption</span>
            </div>
        </div>
    );
}

function Corners() {
    return (
        <>
            <Corner x="left" y="top" />
            <Corner x="left" y="bottom" />
            <Corner x="right" y="top" />
            <Corner x="right" y="bottom" />
        </>
    );
}

function Corner({ x, y }: { x: "left" | "right"; y: "top" | "bottom" }) {
    const xClass = x === "left" ? "left-[1px]" : "right-[1px]";
    const yClass = y === "top" ? "top-[1px]" : "bottom-[1px]";
    const originX = x === "left" ? "origin-left" : "origin-right";
    const originY = y === "top" ? "origin-top" : "origin-bottom";

    return (
        <>
            <span
                className={`absolute ${xClass} ${yClass} z-10 h-3 w-[1px] ${originY} scale-0 bg-neutral-200 transition-all duration-500 group-hover:scale-100`}
            />
            <span
                className={`absolute ${xClass} ${yClass} z-10 h-[1px] w-3 ${originX} scale-0 bg-neutral-200 transition-all duration-500 group-hover:scale-100`}
            />
        </>
    );
}
