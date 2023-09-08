import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                gold: '#EBCD52',
                lightPrimaryBlue: '#729BF1',
                secondaryText: '#D9D9D9',
            },
            animation: {
                slideUpLeft: 'slideUpLeft 1s cubic-bezier(0.83, 0, 0.17, 1)',
                slideDownRight: 'slideDownRight 1s cubic-bezier(0.83, 0, 0.17, 1)',
                textSlide3: 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
            },
            keyframes: {
                slideUpLeft: {
                    '25%, 50%': {
                        transform: 'translate(-5%, -5%)',
                    },
                },
                slideDownRight: {
                    '25%, 50%': {
                        transform: 'translate(5%, 5%)',
                    },
                },
                'text-slide-3': {
                    '0%, 26.66%': {
                        transform: 'translateY(0%)',
                    },
                    '33.33%, 60%': {
                        transform: 'translateY(-25%)',
                    },
                    '66.66%, 93.33%': {
                        transform: 'translateY(-50%)',
                    },
                    '100%': {
                        transform: 'translateY(-75%)',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
