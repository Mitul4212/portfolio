import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-1": "#7B2FFF",
                "primary-2": "#02D9FF",
                "accent": "#FF007A",
                "bg-midnight": "#060618",
            },
            fontFamily: {
                display: ["var(--font-syne)", "sans-serif"],
                sub: ["var(--font-jakarta)", "sans-serif"],
                body: ["var(--font-public)", "sans-serif"],
                code: ["var(--font-jetbrains)", "monospace"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
