import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    font-family: 'SpoqaHanSansNeo-Regular';
  }

  body, html { // 드래그 방지
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    }
    &::-webkit-scrollbar-thumb {
    }
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
