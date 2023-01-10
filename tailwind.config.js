/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#4830D3',
                lightGreen: '#50C878',
            },
        },
    },
    plugins: [],
};
