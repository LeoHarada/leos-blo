import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        container: {
            center: true,
            screens: {
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1240px",
                "2xl": "1300px",
            },
        },
        borderColor: {
            DEFAULT: "black",
        },
    },
    plugins: [],
};
export default config;
