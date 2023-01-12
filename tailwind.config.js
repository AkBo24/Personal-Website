/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#4830D3',
                lightGreen: '#50C878',
                secondaryGold: '#EBCD52',
                textGold: '#EBCD52',
            },
            fontWeight: {
                heroLarge: 20,
            },
            dropShadow: {
                card: '5px 10px 7px rgba(0, 0, 0, 0.25)',
            },
        },
        fontFamily: {
            sans: ['arial'],
        },
    },
    plugins: [],
};
