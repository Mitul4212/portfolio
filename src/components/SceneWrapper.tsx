"use client";

import { useRef, ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface SceneWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SceneWrapper({ children, className, id }: SceneWrapperProps) {
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            container.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id={id} className={`min-h-screen w-full relative ${className}`}>
            {children}
        </section>
    );
}
