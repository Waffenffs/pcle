"use client";

import {
    MainHeaderListItem,
    type MainHeaderListItemProps,
} from "@/components/MainHeaderListItem";
import MainHeaderList from "@/components/MainHeaderList";

import useScrollY from "@/hooks/useScrollY";

export default function MainHeader() {
    const mainHeaderListItems: Array<MainHeaderListItemProps> = [
        {
            link: "/",
            id: "#home",
            text: "Home",
        },
        {
            id: "#staff",
            text: "Staff",
        },
        {
            id: "#history",
            text: "History",
        },
        {
            id: "#contact",
            text: "Contact",
        },
        {
            id: "#faq",
            text: "FAQ",
        }
    ];

    const y = useScrollY();

    return (
        <nav
            className={`w-full h-16 fixed flex justify-center z-10 text-primary
            
            ${y < 300 && "items-center"}`}
        >
            <MainHeaderList>
                {mainHeaderListItems.map((el, i) => (
                    <MainHeaderListItem {...el} key={i} />
                ))}
            </MainHeaderList>
        </nav>
    );
}
