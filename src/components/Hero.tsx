'use client';

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <motion.section
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            id='home'
            className='mt-28'
        >
            <div className='w-full flex flex-col justify-between sm:flex-row sm:items-center'>
                <img
                    src='/pcle-design-3.svg'
                    alt='pcle-design'
                    className='w-[38rem] h-auto mb-10 sm:hidden sm:mt-0'
                />
                <div className='w-[32rem] flex flex-col w-full'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary'>
                        What: A PCLE Deep-Dive Manifesto
                    </h1>
                    <p className='leading-7 [&:not(:first-child)]:mt-6'>
                        Personally led by techpreneur Louie Esteban and meticulously
                        handcrafted by a team of interns, we deliver an
                        introduction and look into the innerworkings of PCLE.
                    </p>
                    <div>
                        <Button className='mt-6 hover:text-zinc-300'>
                            Learn More
                        </Button>
                    </div>
                </div>
                <img
                    src='/pcle-design-3.svg'
                    className='w-[35rem] h-auto hidden sm:block sm:ml-8'
                />
            </div>
        </motion.section>
    );
}
