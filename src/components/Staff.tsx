"use client";

import { motion } from "framer-motion";

import TypographyH1 from "@/components/ui/TypographyH1";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface Staff {
    name: string;
    motto: string;
    position: string;
    image_url: string;
    description: string;

    /* Social links */
    facebook_url?: string;
    instagram_url?: string;
    linkedin_url?: string;
}

export default function Staff() {
    const staffs: Array<Staff> = [
        {
            name: "Louie Esteban",
            motto: "Never give up.",
            position: "CEO",
            image_url:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww",
            description: `A self-made techpreneur, he came to Cavite at a young age where he started a business, eventually becoming the present-day PCLE Computer Worx.

            Today, he can be found mostly at the Cavite branch of the company where he guides both his budling interns and his employees for success.
            `,
        },
        {
            name: "Sir Mark",
            motto: "The hardworking are rewarded.",
            position: "Technical Head @ PCLE Computer Worx - Tagaytay",
            image_url:
                "https://plus.unsplash.com/premium_photo-1674507922535-c771a8e999b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D",
            description: `A loyal employee operating under the Tagaytay branch of the PCLE Computer Worx company, alongside handling technical jobs he also acts as a figurehead in guiding and training their interns.

            Together with his partner, co-workers, and supervision from Louie, they handle the branch's day-to-day operations.`,
        },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            id='staff'
            className='w-full bg-accent flex flex-col justify-center items-center py-14 text-primary'
        >
            <TypographyH1 className='mb-20'>Meet the Staff</TypographyH1>

            <Carousel className='w-11/12 relative'>
                <CarouselContent className='-ml-4 p-5'>
                    {staffs.map((staff, i) => (
                        <CarouselItem
                            key={i}
                            className='bg-primary/30 flex flex-row gap-4 p-4 rounded-2xl max-md:flex-col max-md:py-8 mr-5'
                        >
                            <img
                                src={staff.image_url}
                                alt='staff-image'
                                className='w-4/12 h-[26rem] rounded-xl object-cover max-md:w-full'
                            />

                            <div className='flex flex-col justify-start gap-3'>
                                <div className='flex'>
                                    <header className='flex items-center gap-3 pr-5 bg-primary/40 rounded-full'>
                                        <Avatar>
                                            <AvatarImage
                                                className='w-10 h-10 rounded-full'
                                                src={staff.image_url}
                                            />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <p className='scroll-m-20 text-xl font-semibold tracking-tight text-white'>
                                            "{staff.motto}"
                                        </p>
                                    </header>
                                </div>

                                <div className='border-b pb-2 border-primary'>
                                    <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>
                                        {staff.name}
                                    </h2>
                                    <span className='text-gray-300 tracking-wider italic'>
                                        {staff.position}
                                    </span>
                                </div>

                                <p className='w-full whitespace-pre-line pr-5'>
                                    {staff.description}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className='absolute left-0' />
                <CarouselNext className='absolute right-0' />
            </Carousel>
        </motion.div>
    );
}
