"use client";

import Link from "next/link";

export interface MainHeaderListItemProps {
    id?: `#${string}`;
    link?: `/${string}`;
    text: string;
}

export default function MainHeaderListItem({
    id,
    link,
    text,
}: MainHeaderListItemProps) {
    // const handleClick = () => {
    //     let element;

    //     if (id) {
    //         element = document.getElementById(id);
    //     }

    //     element?.scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <div
            className='scroll-m-20 text-md font-semibold tracking-tight transition duration-150 cursor-pointer 
            hover:text-white sm:text-xl'
        >
            {id ? (
                <a href={id}>
                    <h4>{text}</h4>
                </a>
            ) : (
                <Link href={link!}>{text}</Link>
            )}
        </div>
    );
}
