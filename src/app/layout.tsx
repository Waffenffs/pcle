import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import Staff from "@/components/Staff";
import MainHeader from "@/components/MainHeader";
import Scrollbar from "@/components/Scrollbar";
import Timeline from "@/components/Timeline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PCLE",
    description: "A platform of discovery for PCLE Computer Worx.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${inter.className} antialiased bg-background text-foreground overflow-auto`}
            >
                <MainHeader />
                <main className='px-8 sm:px-24'>{children}</main>
                <Staff />
                <Timeline />
                <Scrollbar />
            </body>
        </html>
    );
}
