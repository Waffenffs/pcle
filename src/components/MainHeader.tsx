import type { MainHeaderListItemProps } from "@/components/MainHeaderListItem";

import MainHeaderList from "@/components/MainHeaderList";
import MainHeaderListItem from "@/components/MainHeaderListItem";

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
    ];

    return (
        <nav
            className='w-full h-16 pt-5 flex flex-col justify-center items-center text-primary
            fixed sm:pt-10 sm:flex-row'
        >
            <MainHeaderList>
                {mainHeaderListItems.map((el, i) => (
                    <MainHeaderListItem {...el} key={i} />
                ))}
            </MainHeaderList>
        </nav>
    );
}
