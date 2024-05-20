import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import MainHeader from "@/components/MainHeader";
import ProgressBar from "@/components/ProgressBar";
import Staff from "@/components/Staff";
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
                className={`${inter.className} antialiased bg-background text-foreground overflow-auto overflow-x-hidden`}
            >
                <MainHeader />
                <main className='px-8 sm:px-24'>{children}</main>
                <Staff />
                <Timeline />
                <ProgressBar />
                <Contact />
                <FAQ />
            </body>
        </html>
    );
}
