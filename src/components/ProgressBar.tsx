"use client";

import { useState, useEffect } from "react";
import useScrollY from "@/hooks/useScrollY";

export default function ProgressBar() {
    const [totalY, setTotalY] = useState(0);
    const [progressBar, setProgressBar] = useState(0);

    const y = useScrollY();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const element = document.getElementsByTagName("body")[0];

            setTotalY(element.clientHeight);
            setProgressBar(window.innerHeight);
        }
    }, []);

    const progress = `${((y + progressBar) / totalY) * 100}%`;

    return (
        <div
            className='h-2 bg-primary overflow-hidden fixed bottom-0 transition duration-100 rounded-r-full'
            style={{ width: progress }}
        ></div>
    );
}
