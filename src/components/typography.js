import {createGlobalStyle} from 'styled-components'

import National from "../fonts/national-2-web-regular.woff"
import National2 from "../fonts/national-2-web-regular.woff2"

import NationalItalic from "../fonts/national-2-web-regular-italic.woff"
import NationalItalic2 from "../fonts/national-2-web-regular-italic.woff2"

import NationalBold from "../fonts/national-2-web-bold.woff"
import NationalBold2 from "../fonts/national-2-web-bold.woff2"


export const GlobalStyle = createGlobalStyle `
	@font-face {
	    font-family: 'National 2';
	    src: url(${National}) format('woff'), url(${National2}) format('woff2');

	    font-weight: normal;
	    font-style: normal;
	    font-display: fallback;
	}

	@font-face {
	    font-family: 'National 2';
	    src: url(${NationalItalic}) format('woff'), url(${NationalItalic2}) format('woff2');

	    font-weight: normal;
	    font-style: italic;
	    font-display: fallback;
	}

	@font-face {
	    font-family: 'National 2';
	    src: url(${NationalBold}) format('woff'), url(${NationalBold2}) format('woff2');

	    font-weight: bold;
	    font-style: normal;
	    font-display: fallback;
	}

	* {
 		margin:0;
  		padding:0;
	}

	body {
	  	background-color: #ffffff;
	  	font-family: 'National 2', -apple-system, BlinkMacSystemFont, sans-serif;
	  	color: #1D1D1F;
	  	overflow-y: scroll;
	  	overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	html, body {
		width: 100%;
	 	height: 100%
	}

	html {
		font-size: 16px;
	  	-webkit-overflow-scrolling: touch;
	  	-webkit-font-smoothing: antialiased;
	  	text-rendering: optimizeLegibility;
	  	line-height: 1.5;
	}

	footer {
	  	margin-bottom:2rem;
	  	font-size: 14px;
  		color: #DCDEE1;
	}

	img {
	  	max-width: 100%;
	  	height:auto;
	}

	a {
	  	text-decoration: none;
	  	color: #8B8F9B;
	  	transition: .2s ease-out;
	}

	p {
	 	font-size: 16px;
	 	
	}

	h1 {
		font-size: 24px;
		font-weight: bold;
	}

	h3 {
		font-size: 16px;
		font-weight: bold;
	}

	::selection {
		color: white;
	  	background:#2950ff;
	}

	@media only screen and (min-width: 722px) {
  		html {
    		font-size: 32px;
  		}

		p {
		   font-size: 22px;
		}

		h1 {
			font-size: 32px;
			font-weight:bold;
		}

		h3 {
			font-size: 22px;
			font-weight: bold;
		}

		a {
			font-size: 18px;
	  		text-decoration: none;
	  		color: #8B8F9B;
		}
	}

`