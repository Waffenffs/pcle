"use client";

import Link from "next/link";

interface MainHeaderListItemProps {
    id?: `#${string}`;
    link?: `/${string}`;
    text: string;
}

const MainHeaderListItem: React.FC<MainHeaderListItemProps> = ({
    id,
    link,
    text,
}) => (
    <div
        className='scroll-m-20 text-sm font-semibold tracking-tight transition duration-150 cursor-pointer 
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

export { MainHeaderListItem, type MainHeaderListItemProps };

