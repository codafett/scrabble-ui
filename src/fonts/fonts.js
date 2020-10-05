import { createGlobalStyle } from 'styled-components';

import NunitoRegular from './Nunito-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'MainFont';
        src: url(${NunitoRegular}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;