"use client";

import { ReactNode } from "react";


interface SceneWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SceneWrapper({ children, className, id }: SceneWrapperProps) {



    return (
        <section id={id} className={`min-h-screen w-full relative ${className}`}>
            {children}
        </section>
    );
}
