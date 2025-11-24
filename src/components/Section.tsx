import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx("py-20 md:py-32 px-6 max-w-7xl mx-auto", className)}
        >
            {children}
        </section>
    );
}
