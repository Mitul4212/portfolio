"use client";

import { ReactNode, useEffect } from "react";
import { initSmoothScroll } from "@/lib/scroll";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = initSmoothScroll();
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
