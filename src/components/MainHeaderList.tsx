export default function MainHeaderList({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ul
            className='cursor-pointer mt-5 rounded-full bg-accent/50 backdrop-blur-xl py-2 px-8 mt-3 flex flex-row items-center 
            gap-5 border shadow shadow-accent transition duration-300 hover:-translate-y-px hover:shadow-xl hover:shadow-accent 
            hover:border hover:border-primary sm:px-10 sm:mt-0 sm:px-10 sm:gap-7'
        >
            {children}
        </ul>
    );
}
