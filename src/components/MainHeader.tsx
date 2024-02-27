import MainHeaderList from "@/components/MainHeaderList";
import MainHeaderListItem from "@/components/MainHeaderListItem";
import Link from "next/link";

export default function MainHeader() {
    return (
        <nav className='w-full h-16 flex justify-between items-center text-primary'>
            <Link href={"/"}>
                <h1 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>
                    PCLE Hub
                </h1>
            </Link>

            <MainHeaderList>
                <MainHeaderListItem id='#about' text='About' />
                <MainHeaderListItem id='#mission' text='Mission' />
                <MainHeaderListItem id='#team' text='Team' />
                <MainHeaderListItem id='#system' text='System' />
            </MainHeaderList>
        </nav>
    );
}
