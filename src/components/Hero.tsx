"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className='mt-20'>
            <div className='w-full flex flex-row justify-between'>
                <div className='w-[32rem] flex flex-col'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary'>
                        Who: Cavite's Premier Tech Solutions
                    </h1>
                    <p className='leading-7 [&:not(:first-child)]:mt-6'>
                        Led by techpreneur Louie Esteban and based in Cavite, we
                        deliver innovative solutions tailored to your needs.
                        Interested?
                    </p>
                    <div>
                        <Button variant={"default"} className='mt-6'>
                            Learn More
                        </Button>
                    </div>
                </div>

                <Image
                    src={
                        "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3klMjBzaG9wfGVufDB8fDB8fHww"
                    }
                    alt='hero-pic'
                    width={500}
                    height={0} // This property is useless; why is this even required
                    className='rounded-xl object-cover'
                />
            </div>
        </section>
    );
}
