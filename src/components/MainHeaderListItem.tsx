"use client";

export default function MainHeaderListItem({
    id,
    text,
}: {
    id: string;
    text: string;
}) {
    const handleClick = () => {
        const element = document.getElementById(id);

        // if (!element) console.error(`Element ${id} does not exist`)

        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <li onClick={() => handleClick()}>
            <h4 className='scroll-m-20 text-xl font-semibold tracking-tight transition duration-150 hover:text-white cursor-pointer'>
                {text}
            </h4>
        </li>
    );
}
