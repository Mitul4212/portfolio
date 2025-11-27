"use client";

import { ReactNode, useEffect } from "react";
import { initSmoothScroll } from "@/lib/scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = initSmoothScroll();

        // Robust refresh strategy
        const refresh = () => ScrollTrigger.refresh();

        // 1. Refresh immediately
        refresh();

        // 2. Refresh after short delays to catch layout shifts
        const timers = [
            setTimeout(refresh, 100),
            setTimeout(refresh, 500),
            setTimeout(refresh, 1000),
            setTimeout(refresh, 2000) // Late refresh for slow loading assets
        ];

        // 3. Refresh on window load (if not already fired)
        window.addEventListener('load', refresh);

        // 4. Refresh on resize (debounced by GSAP usually, but good to be explicit if needed)
        // Lenis handles resize usually, but we want to ensure ScrollTrigger knows

        return () => {
            lenis.destroy();
            timers.forEach(clearTimeout);
            window.removeEventListener('load', refresh);
        };
    }, []);

    return <>{children}</>;
}
