"use client";

import TracingBeam from "./TracingBeam";

export default function TracingCards() {
    return (
        <>
            <TracingBeam position="right">
                <div className="w-2xl mx-auto text-white">
                    {testContent.map((item, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="mb-4 font-light">{item.badge}</h2>

                            <p className="text-2xl mb-4">{item.title}</p>

                            <div className="text-sm dark:prose-invert">
                                {item?.image && (
                                    <img
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-md mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>

            <TracingBeam position="left">
                <div className="w-2xl mx-auto text-white">
                    {testContent.map((item, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="mb-4 font-light">{item.badge}</h2>

                            <p className="text-2xl mb-4">{item.title}</p>

                            <div className="text-sm dark:prose-invert">
                                {item?.image && (
                                    <img
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-md mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const testContent = [
    {
        title: "Lion",
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                </p>
            </>
        ),
        badge: "Section",
        image: "https://images.unsplash.com/photo-1585856141833-ca095e957dd3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Baby Lion",
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                </p>
            </>
        ),
        badge: "Section",
        image: "https://images.unsplash.com/photo-1740132330736-7ef3ea15c8ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
