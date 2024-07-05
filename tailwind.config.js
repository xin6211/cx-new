/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                'cardShadow': [
                    '0 4px 0px rgba(0, 0, 0, 1)',
                ]
            },
            spacing: {
                'pxpad': '1.4rem',
                "pxph": '1rem',
            },
        },
        borderRadius: {
            'regular': '3.2rem',
            'ph': '2.4rem',
            'md': '0.375rem',
            '2xl': "0.8rem"
        },
        backgroundImage: {
            dsBgImg: "url('src/assets/img/ring.png')",
            gridBgImg: "url('src/assets/img/grid-bg.png')",
            cardBgImg: "url('src/assets/img/grid-bg.png')",
            linearBg: "linear-gradient(180deg, rgba(243, 243, 243, 0) 36.47%, #F3F3F3 81.87%)"
        },
        backgroundSize: {
            dsBgSize: "90%",
            cardBgSize: "90% auto, auto",
        },
        backgroundPosition: {
            dsBgPos: "center",
        },
        screens: {
            'sm': { 'min': '0px', 'max': '767px' },
            'md': { 'min': '768px', 'max': '1023px' },
            'lg': { 'min': '1024px', 'max': '1279px' },
            'xl': { 'min': '1280px', 'max': '1535px' },
            '2xl': { 'min': '1536px' },
            'pad': { 'min': '640px', 'max': '1525px' },
            'minipad': { 'min': '640px', 'max': '820px' },
            'propad': { 'min': '821px', 'max': '1025px' },
            'maxpad': { 'min': '1026px', 'max': '1525px' },
            'padpm': { 'min': '1526px', 'max': '1800px' },
            "ph": { 'min': '0px', 'max': '640px' },
        },
        textColor: {
            "black": "rgba(0,0,0,1)",
            "white": "rgba(255,255,255,1)",
        },
        fontFamily: {
            MonumentRegular: ['Monument Regular', 'sans-serif'],
            Mono: ['Mono Regular', 'sans-serif'],
            MonoMedium: ['Mono Medium', 'sans-serif'],
            GroteskMedium: ['Grotesk Medium', 'sans-serif'],
            Grotesk: ['Grotesk Regular', 'sans-serif'],
        },
        colors: {
            "white": "rgba(255,255,255,1)",
            "black": "rgba(0,0,0,1)",
            "bggray": "rgba(243,243,243,1)",
            "bgblack": "rgba(54,52,68,1)",
            "bgpurple": "rgba(178,160,229,1)",
            "bghalfwhite": "rgba(255,255,255,0.39)",
            "borderlinear": "rgba(168,140,244,1)"
        }
    },
    plugins: [],
}