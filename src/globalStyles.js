import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #abe9cd;
    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
    margin: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default GlobalStyle
