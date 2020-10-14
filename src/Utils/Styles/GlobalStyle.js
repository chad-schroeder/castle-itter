import { createGlobalStyle } from 'styled-components';
import theme from 'Utils/Styles/theme';

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote {
        margin: 0;
    }

    body {
        min-height: 100vh;
        overflow-x: hidden;
        font-family: sans-serif;
        color: ${theme.colors.black};
        line-height: 1.5;
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
        background-color: #f6f6f6;
    }

    h1, h2, h3, h4, h5, h6 {
        
    }

    h1 {
        font-size: 2.25rem;
        font-weight: 700,
    }

    table {
        width: 100%;
        font-size: 0.825rem;
        border-collapse: collapse;
    }

    table caption {
        margin-bottom: 0.25em;
        font-size: 0.88rem;
        line-height: 1.25;
        font-weight: 600;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #cbcbcb;
    }

    th, td {
        padding: 0.75em 0.5em;
        font-weight: 400;
    }
`;

export default GlobalStyle;
