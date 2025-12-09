import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-gray': '#FAF7F0', // Warm White
                'brand-yellow': '#FCD116', // Colombian Yellow
                'colombian-yellow': '#FCD116',
                'colombian-blue': '#003893',
                'colombian-red': '#CE1126',
                'terracotta': '#C85A3E',
                'coffee-brown': '#6F4E37',
                'emerald-green': '#50C878',
                'clay-orange': '#D4734B',
                'cream': '#FFF8E7',
                'warm-white': '#FAF7F0',
                'charcoal': '#374151',
                'gold': '#D4AF37',
            },
        },
    },
    plugins: [],
} satisfies Config;
