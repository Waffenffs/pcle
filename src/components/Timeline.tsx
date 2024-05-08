import TypographyH1 from "@/components/ui/TypographyH2";
import { Button } from "@/components/ui/button";

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    button: boolean;

    url?: string;
}

export default function Timeline() {
    const timeline: Array<TimelineItem> = [
        {
            date: "August, 2007",
            title: "The Start of Everything",
            description:
                "Department of Trade and Industry (DTI) approved the registration of PCLE Computer Worx titled under its owner and manager, Louie D. Esteban",
            button: false,
        },
        {
            date: "Unknown",
            title: "The First Store",
            description:
                "PCLE Computer Worx's first branch was formally opened in Olivarez Plaza, San Jose Tagaytay City, at El-Pueblo.",
            button: false,
        },
        {
            date: "A year and a month later",
            title: "The Great Expansion",
            description:
                "The company, PCLE Computer Worx, spearheaded by it's CEO and owner, Louie D. Esteban, began to expand and started selling additional merchandise.",
            button: false,
        },
        {
            date: "April, 2009",
            title: "And Another One!",
            description:
                "A new branch was opened in El-Pueblo to sell phones and accessories. Rustan, Louie's older brother, also opened Stall #5 to have the first Internet Cafe of the siblings.",
            button: false,
        },
        {
            date: "August, 2010",
            title: "Relocation",
            description:
                "The various businesses managed together by Louie and Rustan relocated to a bigger space along Aguinaldo Highway, the center and busiest part of Tagaytay. Later on, Rustan created his own company named as Clickmaster and the rest was history.",
            button: false,
        },
        {
            date: "Current",
            title: "Present and Future",
            description:
                "PCLE Computer Worx now has another branch located in Pala Dala, Dasmarinas, near Robinsons Mall. The company continues to stay as a figure in providing high quality computers and consistently offers services with honesty and integrity.",
            button: false,
        },
    ];

    return (
        <div className='py-10 w-full flex flex-row gap-20 justify-center max-md:flex-col max-md:items-center max-md:gap-10'>
            <TypographyH1>Company Timeline</TypographyH1>
            <ol id='history' className='relative border-s mt-10'>
                {timeline.map((tl, i) => (
                    <li key={i} className='mb-10 ms-4'>
                        <div
                            className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700'
                        ></div>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 italic'>
                            {tl.date}
                        </time>
                        <h3 className='text-lg font-semibold'>{tl.title}</h3>
                        <p className='mb-4 text-base font-normal text-gray-300 dark:text-gray-400 whitespace-pre-line max-w-sm'>
                            {tl.description}
                        </p>
                        {tl.button && (
                            <Button className='hover:text-zinc-300'>
                                Learn More
                            </Button>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}
