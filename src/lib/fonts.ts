import { Syne, Plus_Jakarta_Sans, Public_Sans, JetBrains_Mono } from "next/font/google";

export const syne = Syne({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-syne",
    display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jakarta",
    display: "swap",
});

export const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-public",
    display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const fontVariables = `${syne.variable} ${plusJakarta.variable} ${publicSans.variable} ${jetbrainsMono.variable}`;
