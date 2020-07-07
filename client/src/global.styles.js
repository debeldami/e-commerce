import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
        body {
            margin: 0;
            font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont,
                'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            padding: 20px 60px;

            @media screen and (max-width: 800px){
                padding: 10px;
            }
        }

        a {
            text-decoration: none;
            color: black;
        }

        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
        }

        * {
            box-sizing: border-box;
        }

    `