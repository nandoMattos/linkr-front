import { createGlobalStyle } from "styled-components";
import { colors } from "../constants.js";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: ${colors.MAIN_COLOR};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
	  box-sizing: border-box;
  }
  a {
	  text-decoration: none;
	  color: inherit;
	  cursor: pointer;
  }
  ion-icon, button {
    cursor: pointer;
  }
  .scroll-loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0px 150px 0px;
    img {
      width: 60px;
      margin-bottom: 10px;
    }
    p {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 22px;
      letter-spacing: 0.05em;
      color: #6d6d6d;
    }
  }
`;

export default GlobalStyle;
