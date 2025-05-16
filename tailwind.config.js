/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",    
        "./pages/**/*.{js,ts,jsx,tsx}",  
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-green': '#00a887',
                'dark-green': '#006666',
                'darkBg': 'rgb(14, 14, 16)',
                'borderGray': 'rgb(48, 50, 54)',
            },
            screens: {
                xxs: '320px',
                xss: '375px',
                xs: '425px',
                sm: '625px'
            },
            backgroundImage: {
                'custom-gradient': 'radial-gradient(circle 1500px at 5.2% 7.2%, rgba(0, 64, 33, 1) 0%, rgba(0, 64, 33, 1) 7.5%, rgba(0,0,0, 1) 44.7%)',
                'hwt': 'linear-gradient(270deg, rgb(146, 127, 228) 0%, rgb(253, 187, 114) 100%)',
            },

        },
        fontFamily: {
            inter: ['var(--font-inter)'],         // Base font
            poppins: ['var(--font-poppins)'],
            intro: ['var(--font-intro)'],     // Custom local
        },
        // fontWeight: {
        //     'small': '300',
        //     'normal': '400',
        //     'medium': '500',
        //     'semi-bold': '600',
        //     'bold': '900',
        //     'htw': '1200',
        // },

    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-thin": {
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgb(31,29,29) white",
                },
                ".scrollbar-webkit": {
                    "&::-webkit-scrollbar": {
                        width: "8px",
                        height: "8px", // Optional: for horizontal scrollbar
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "white",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgb(31,45,55)",
                        borderRadius: "20px",
                        border: "1px solid white",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "rgb(51, 61, 71)", // Optional: hover effect
                    },
                    "&::-webkit-scrollbar-corner": {
                        background: "white", // Optional: corner color
                    },
                }
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        }
    ]

}
