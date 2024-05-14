import { useState, useEffect } from "react";

/** Returns the current Y axis. */
const useScrollY = () => {
    const [y, setY] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => setY(window.scrollY));
        }
    }, []);

    return y;
};

export default useScrollY;
