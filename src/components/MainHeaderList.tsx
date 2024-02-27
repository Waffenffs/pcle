export default function MainHeaderList({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ul className='rounded-full bg-accent py-2 px-8 flex flex-row items-center gap-7 shadow shadow-accent'>
            {children}
        </ul>
    );
}
