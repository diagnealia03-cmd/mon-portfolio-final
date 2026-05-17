/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0b1120',
                    2: '#111827',
                    3: '#1e2a3a',
                },
                rose: {
                    soft: '#e879a0',
                    light: '#f9a8c9',
                    pale: '#fce7f3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                float: 'float 3.5s ease-in-out infinite',
                'float-r': 'floatR 4s ease-in-out infinite',
                pulse2: 'pulse2 2s ease-in-out infinite',
                'grad-rotate': 'gradRotate 6s linear infinite',
                'fill-bar': 'fillBar 1s ease both',
            },
            keyframes: {
                float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
                floatR: { '0%,100%': { transform: 'translateY(0) rotate(3deg)' }, '50%': { transform: 'translateY(-8px) rotate(3deg)' } },
                pulse2: { '0%,100%': { opacity: '.6', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.05)' } },
                gradRotate: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
                fillBar: { from: { width: '0' }, to: { width: 'var(--w)' } },
            },
            backdropBlur: { xs: '4px' },
        },
    },
    plugins: [],
};