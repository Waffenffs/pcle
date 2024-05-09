"use client";

import useScrollY from "@/hooks/useScrollY";

const MainHeaderList: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const y = useScrollY();

    return (
        <ul
            className={`cursor-pointer bg-accent/50 backdrop-blur-xl py-2 px-8 flex flex-row items-center 
            gap-5 shadow shadow-accent transition duration-300 border-primary/20 hover:-translate-y-px hover:shadow-xl 
            hover:shadow-accent hover:border-primary sm:px-10 sm:mt-0 sm:px-10 sm:gap-7 

            ${y >= 300 ? "w-full border-b" : "mt-5 rounded-full border"}`}
        >
            {children}
        </ul>
    );
};

export default MainHeaderList;
