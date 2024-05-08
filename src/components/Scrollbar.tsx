"use client";

import { useState, useEffect } from "react";

export default function Scrollbar() {
    const [y, setY] = useState(0);
    const [totalY, setTotalY] = useState(0);
    const [scrollbar, setScrollbar] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setY(window.scrollY);

            window.addEventListener("scroll", () => setY(window.scrollY));

            const element = document.getElementsByTagName("body")[0];

            setTotalY(element.clientHeight);
            setScrollbar(window.innerHeight);
        }
    }, []);

    const scroll = `${((y + scrollbar) / totalY) * 100}%`;

    return (
        <div
            className='h-2 bg-primary overflow-hidden fixed bottom-0 transition duration-100 rounded-r-full'
            style={{ width: scroll }}
        ></div>
    );
}
