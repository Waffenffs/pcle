import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainHeader from "@/components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PCLE Works",
    description: "A platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} antialiased bg-background text-foreground px-24`}
            >
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
