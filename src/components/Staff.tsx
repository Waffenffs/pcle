"use client";

import TypographyH1 from "@/components/ui/TypographyH2";
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
    ];

    return (
        <div
            id='staff'
            className='w-full bg-accent flex flex-col justify-center items-center py-14 px-8 text-primary'
        >
            <TypographyH1>Meet the Staff</TypographyH1>
            <div className='mb-20'></div>

            <div className='w-full flex flex-col gap-8'>
                {staffs.map((staff, i) => (
                    <article
                        key={i}
                        className='bg-primary/30 w-full flex flex-row gap-4 p-4 rounded-2xl max-md:flex-col max-md:py-8'
                    >
                        <img
                            src={staff.image_url}
                            className='w-4/12 h-[26rem] rounded-xl object-cover max-md:w-full'
                        />

                        <div className='flex flex-col justify-start gap-3 w-8/12 max-md:w-full'>
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

                            <p className='w-full whitespace-pre-line'>
                                {staff.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}