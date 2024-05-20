"use client";

import { motion } from "framer-motion";

import MainHeaderList from "@/components/MainHeaderList";
import {
    MainHeaderListItem,
    type MainHeaderListItemProps,
} from "@/components/MainHeaderListItem";

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
            id: "#gallery",
            text: "Gallery"
        },
        {
            id: "#contact",
            text: "Contact",
        },
        {
            id: "#faq",
            text: "FAQ"
        }
    ];

    const y = useScrollY();

    return (
        <motion.nav
            initial={{ y: -100 }} // Starting position will be above the screen
            animate={{ y: 0 }} // End position at the top of the screen
            transition={{ duration: 1.2 }} // Duration
            className={`w-full h-16 fixed flex justify-center z-20 text-primary
            
            ${y < 300 && "items-center"}`}
        >
            <MainHeaderList>
                {mainHeaderListItems.map((el, i) => (
                    <MainHeaderListItem {...el} key={i} />
                ))}
            </MainHeaderList>
        </motion.nav>
    );
}
