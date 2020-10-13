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
        font-family: "Open Sans",-apple-system, system-ui, BlinkMacSystemFont, sans-serif;
        color: ${theme.colors.black};
        line-height: 1.5;
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
        background-color: #fff;
    }

    h1, h2, h3, h4, h5, h6 {
        fontFamily: '"Poppins", -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
    }
`;

export default GlobalStyle;
