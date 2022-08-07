import { createGlobalStyle } from 'styled-components';

import GilroyRegularWoff2 from './gilroy-regular.woff2';
import GilroyRegularTtf from './gilroy-regular.ttf';
import GilroyMediumWoff2 from './gilroy-medium.woff2';
import GilroyMediumTtf from './gilroy-medium.ttf';
import GilroyBoldWoff2 from './gilroy-medium.woff2';
import GilroyBoldTtf from './gilroy-medium.ttf';

const FontStyles = createGlobalStyle`
	@font-face {
		font-family: 'Gilroy';
		font-weight: 400;
		src: url(${GilroyRegularWoff2}) format('woff2'), url(${GilroyRegularTtf}) format('truetype');
	}
	@font-face {
		font-family: 'Gilroy';
		font-weight: 500;
		src: url(${GilroyMediumWoff2}) format('woff2'), url(${GilroyMediumTtf}) format('truetype');
	}
	@font-face {
		font-family: 'Gilroy';
		font-weight: 700;
		src: url(${GilroyBoldWoff2}) format('woff2'), url(${GilroyBoldTtf}) format('truetype');
	}
`

export default FontStyles;