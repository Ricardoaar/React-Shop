module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/*.html",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#FFF",
                "secondary": "#ACD9B2",
                "disabled": "#C7C7C7",
            },
            backgroundColor: {
                "btn-primary": "#ACD9B2",
                "disabled": "#E7E7E7",
                "btn-secondary": "#FFFFFF",
            }

        },
    },
    plugins: [],
}
