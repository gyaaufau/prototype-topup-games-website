/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    50: '#e8f4f5',
                    100: '#d1e9eb',
                    200: '#a3d3d7',
                    300: '#75bdc3',
                    400: '#5F9598',  // Accent color
                    500: '#47a7af',
                    600: '#39868c',
                    700: '#2b6469',
                    800: '#1D546D',  // Secondary color
                    900: '#0f2a36',
                    950: '#061E29',  // Background color
                },
                'dark': {
                    DEFAULT: '#061E29',
                    light: '#0a2838',
                    lighter: '#0f3447',
                },
                'accent': {
                    DEFAULT: '#5F9598',
                    light: '#75bdc3',
                    dark: '#47878a',
                },
                'secondary': {
                    DEFAULT: '#1D546D',
                    light: '#2b6469',
                    dark: '#0f2a36',
                }
            },
            backgroundColor: {
                'base': '#061E29',
            }
        },
    },
    plugins: [],
}
