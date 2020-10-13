const theme = {
    colors: {
        red: '#d63021',
        black: '#191919',
    },
    fonts: {
        // h1 3rem, 1.25, 700
        // h2 2.25rem, 1.25, 700
        // 1.75rem, 1.25, 700
        // h3 1.0575rem 1.25, 600
        // 1rem, 500
        // p 0.925rem
        // EYEBROW: 0.825rem, 1.25, 700
        // TAGLINE: 1.25rem, 1.5
        h1: {
            fontSize: '1.75rem', 
            lineHeight: 1.25,
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '1.0575rem',
            lineHeight: 1.25,
            fontWeight: 700,
        },
        h3: {
            fontSize: '0.925rem',
            textTransform: 'uppercase',
        },
        h4: {
            fontSize: '0.88rem',
            lineHeight: 1.25,
            fontWeight: 600,
        },
        p: {
            fontSize: '0.825rem',
        }
    }
};

export default theme;
