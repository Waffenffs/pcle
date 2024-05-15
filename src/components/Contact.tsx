"use client";

import { useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { send } from "@emailjs/browser";

import { FiPhoneCall } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

type ContactReason =
    | "General Inquiry"
    | "Product Inquiries"
    | "Technical Support"
    | "Order and Shipping Questions"
    | "Warranty and Returns"
    | "Feedback and Suggestions";

export default function Contact() {
    const [dropdown, setDropdown] = useState<{
        toggled: boolean;
        selected: undefined | ContactReason;
    }>({
        toggled: false,
        selected: undefined,
    });
    const dropdownRef = useDetectClickOutside({
        onTriggered: () =>
            setDropdown((prevState) => ({ ...prevState, toggled: false })),
    });

    const inputFields = {
        from_name: useRef<HTMLInputElement>(null),
        from_email: useRef<HTMLInputElement>(null),
        message: useRef<HTMLTextAreaElement>(null),
        inquiry_reason: dropdown.selected || "General Inquiry",
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevents the page from refreshing
        e.preventDefault();

        try {
            /* IMPLEMENT ME */
            // create .env file for storing keys
            // send()
        } catch (error) {
            console.error(`Error sending email: ${error}`);
        }
    };

    return (
        <footer
            id='contact'
            className='w-full bg-accent flex flex-row items-center sm:p-20 max-md:flex-col 
            max-md:p-10 max-md:justify-center max-md:items-center'
        >
            <div
                className='font-semibold flex flex-col max-md:mb-20 sm:w-1/2 max-md:text-center
                max-md:justify-center max-md:items-center'
            >
                <div className='text-8xl tracking-wider mt-14 sm:max-w-xs'>
                    REACH OUT TO <span className='text-primary'>US</span>
                </div>

                <div className='mt-14 tracking-tight flex flex-col gap-4'>
                    <span>Contact us</span>

                    <div className='pl-6 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2 text-primary'>
                            <FiPhoneCall className='text-2xl' />
                            <span className='underline'>(046) 483 0559</span>
                        </div>

                        <div className='flex flex-row items-center gap-2 text-primary'>
                            <MdOutlineAttachEmail className='text-2xl' />
                            <span className='underline'>
                                pcle.worx@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 text-8xl text-white/30 tracking-wider'>
                    OR
                </div>

                <div className='mt-14 max-w-xs tracking-tight'>
                    Fill in the form and we will reach out to you shortly.
                </div>
            </div>

            <form
                onSubmit={(e) => sendEmail(e)}
                className='w-1/2 flex-col gap-10 bg-primary/70 p-10 rounded-2xl text-black shadow shadow-2xl max-md:w-full'
            >
                <label
                    htmlFor='name'
                    className='font-semibold tracking-tight text-xl'
                >
                    Name
                </label>
                <input
                    required
                    ref={inputFields["from_name"]}
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                    className='rounded-2xl bg-white border-2 border-black px-5 py-4 w-full text-sm 
                    mb-5 mt-1 focus:outline-none'
                />

                <label
                    htmlFor='Email'
                    className='font-semibold tracking-tight text-xl'
                >
                    Email
                </label>
                <input
                    required
                    ref={inputFields["from_email"]}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                    className='rounded-2xl bg-white border-2 border-black px-5 py-4 w-full text-sm 
                    mb-5 mt-1 focus:outline-none'
                />

                <div ref={dropdownRef} className='flex flex-col relative mb-5'>
                    <label
                        htmlFor='dropdown'
                        className='font-semibold tracking-tight text-xl'
                    >
                        Reasons to Connect
                    </label>
                    <button
                        onClick={() =>
                            setDropdown((prevState) => ({
                                ...prevState,
                                toggled: !prevState.toggled,
                            }))
                        }
                        className='font-semibold tracking-tight border rounded-2xl bg-white 
                        text-black border border-2 px-5 py-4 flex justify-between items-center
                        hover:bg-white/70 transition duration-300'
                    >
                        <span>
                            {dropdown.selected !== undefined
                                ? dropdown.selected
                                : "Select Reason"}
                        </span>
                        <FaHeart />
                    </button>

                    <ul
                        className={`${
                            dropdown.toggled !== true && "hidden"
                        } rounded-2xl absolute top-24 w-full z-10 flex flex-col transition duration-300`}
                    >
                        {[
                            "General Inquiry",
                            "Product Inquiries",
                            "Technical Support",
                            "Order and Shipping Questions",
                            "Warranty and Returns",
                            "Feedback and Suggestions",
                        ].map((reason, index) => (
                            <a
                                onClick={() => {
                                    setDropdown({
                                        toggled: false,
                                        selected: reason as ContactReason,
                                    });
                                }}
                                key={index}
                                className={`px-5 py-4 bg-white hover:bg-zinc-100 transition duration-300
                                cursor-pointer ${
                                    index === 0 && "rounded-t-xl"
                                } ${index === 4 && "rounded-b-xl"}`}
                            >
                                {reason}
                            </a>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <label
                        htmlFor='message'
                        className='font-semibold tracking-tight text-xl'
                    >
                        Message
                    </label>
                    <textarea
                        required
                        ref={inputFields["message"]}
                        rows={5}
                        placeholder='Type your message here'
                        className='rounded-2xl bg-white border-2 border-black px-5 py-4 text-sm 
                        mt-1 focus:outline-none'
                    />
                </div>

                <button
                    className='rounded-2xl w-full bg-primary text-white mt-10 py-4 
                    font-bold text-xl tracking-tight transition duration-300 border-2 
                    border-primary hover:bg-green-500 hover:border-primary hover:text-slate-300'
                >
                    SEND MESSAGE
                </button>
            </form>
        </footer>
    );
}
