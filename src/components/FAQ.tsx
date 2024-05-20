"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";
import TypographyH1 from "@/components/ui/TypographyH1";

interface FAQItem {
    title: string;
    value: string;
}

export default function FAQ() {
    const questions: Array<FAQItem> = [
        {
            title: "When do you open up and close shops?",
            value: "We open our doors regularly at 9AM and close at 6PM.",
        },
    ];

    return (
        <article id='faq'>
            <Accordion
                type='single'
                collapsible
                className='w-full flex flex-col justify-center items-center p-10 pb-36'
            >
                <TypographyH1 className='mb-24'>
                    Frequently Asked Questions
                </TypographyH1>
                {questions.map((question, index) => (
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className='border-b-2 pb-3 w-full text-left'>
                            {question.title}
                        </AccordionTrigger>
                        <AccordionContent className='pt-3'>
                            {question.value}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </article>
    );
}
