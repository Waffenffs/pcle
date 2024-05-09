"use client";

import { useState, useEffect } from "react";
import useScrollY from "@/hooks/useScrollY";

export default function Scrollbar() {
    const [totalY, setTotalY] = useState(0);
    const [scrollbar, setScrollbar] = useState(0);

    const y = useScrollY();

    useEffect(() => {
        if (typeof window !== "undefined") {
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
