// 웹페이지의 글로벌 스타일 설정하는 곳

import { createGlobalStyle } from "styled-components";
// import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
  margin : 0;
  padding : 0;
  box-sizing : border-box;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol, ul, li {
    list-style: none;
  }
  body{
    min-height : 100vh;
    overflow-x : hidden;
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  :root{
    --blue : #287bff;
    --white : #fff;
    --grey : #f5f5f5;
    --black1 : #222;
    --black2 : #999;
  }
`;

export default GlobalStyle;