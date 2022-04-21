import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding : 0;
    border: 0;
}

body {
    background-color:   ${ ({ theme }) => theme.blanco };
    color:              ${ ({ theme }) => theme.negro };
}

@media screen and (prefers.color.scheme:dark) {
    body {
        background-color:   ${ ({ theme }) => theme.negro };
        color:              ${ ({ theme }) => theme.blanco };
    }
}

`;

export default GlobalStyle;