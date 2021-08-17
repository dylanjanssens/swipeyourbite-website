module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                ...theme('colors'),
                button: '#f1cdc0',
                footer: '#DDEAF6',
            }),
            lineHeight: {
                'extra-loose': '3.75rem',
            },
            fontFamily: {
                jost: ['Jost', 'sans-serif'],
                patrick: ['Patrick Hand', 'sans-serif'],
            },
            boxShadow: {
                card: '0 0 25px rgba(5,8,7,0.1)',
                popup: '0 0 12.5px rgba(5,8,7,0.25)',
            },
            fontSize: {
                '4.5xl': ['2.813rem', '2.5rem'],
            },
        },
    },
    variants: {
        extend: {
            margin: ['responsive'],
        },
    },
    plugins: [],
}
