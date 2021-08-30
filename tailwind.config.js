module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "source-code-pro": ['"Source Code Pro"'],
            },
            height: {
                "fit-content": "fit-content",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
