import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: FontOne;
    src: url(./asset/font/Font.ttf);
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
`;
