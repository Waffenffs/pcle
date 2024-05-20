import { cn } from "@/lib/utils";

interface TypographyH1Props {
    className?: string;
    children: string;
}

// To be tested!
const TypographyH1: React.FC<TypographyH1Props> = ({ className, children }) => (
    <h1
        className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className)}
    >
        {children}
    </h1>
);

export default TypographyH1;