import gsap from "gsap";

const contents = [
    { title: "Apple", color: "#A8E6CF" },
    { title: "Book", color: "#FFDAB9" },
    { title: "Coffee", color: "#A67B5B" },
    { title: "Dinner", color: "#FF9E8F" },
    { title: "Exercise", color: "#D0FF5E" },
    { title: "Friend", color: "#CDB4DB" },
    { title: "Gift", color: "#AEC6CF" },
    { title: "Home", color: "#E3B23C" },
    { title: "Ice cream", color: "#FFB6C1" },
];

export default function ColoredStripCards() {
    const manageMouseEnter = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        gsap.to(e.target, {
            top: "-2vw",
            backgroundColor: contents[index].color,
            duration: 0.3,
        });
    };

    const manageMouseLeave = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        _index: number
    ) => {
        gsap.to(e.target, {
            top: "0",
            backgroundColor: "white",
            duration: 0.3,
            delay: 0.1,
        });
    };

    return (
        <div className="relative w-full">
            {contents.map((item, index) => (
                <div
                    key={index}
                    className="relative border-t-[1px] border-t-black border-solid mb-[-2vw] bg-white cursor-pointer"
                    onMouseEnter={(e) => manageMouseEnter(e, index)}
                    onMouseLeave={(e) => manageMouseLeave(e, index)}
                >
                    <p className="m-0 p-0 text-[5vw] pl-2.5 uppercase pointer-events-none">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
