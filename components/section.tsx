import { cn } from "@/lib/utils";

interface Props {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}

const Section = ({ id, className, children }: Props) => {
    return (
        <section id={id} className={cn("py-12", className)}>{children}</section>
    )
}

export default Section