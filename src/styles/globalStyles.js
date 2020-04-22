import { createGlobalStyle } from 'styled-components';
import colours from './colours';

/* eslint no-unused-expressions: 0 */
export default createGlobalStyle`

  html{
    height: 100%;
    width: 100%;
    font-size: 12px;
    font: 'MainFont';
    color: ${colours.TEXT.NORMAL};
  }

  body {
    height: 100%;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    /* 'Titillium Web', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-size: 12px;
  }

  body.fontLoaded {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    /* 'Titillium Web', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  #app {
    height: 100vh;
    min-height: 100vh;
    min-width: 100vw;
  }

  p,
  label {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    /* 'Titillium Web', 'Montserrat', Times, 'Times New Roman', serif; */
    line-height: 1.5em;
  }

  div, ul, li { background-color: inherit; }

  .toast-container{
    background-color: transparent;
  }

  input {
    padding: 6px 2px;
    border: solid 1px ${colours.BORDER.NORMAL};
    border-radius: 4px;
    color: ${colours.TEXT};
  }
`;
