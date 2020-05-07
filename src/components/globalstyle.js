import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle `
	
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
  		color: #8B8F9B;
	}

	img {
	  	max-width: 100%;
	  	height:auto;
	}

	

	::selection {
		color: white;
	  	background:#6466FF;
	}

	@media only screen and (min-width: 722px) {
  		html {
    		font-size: 32px;
  		}
  	}
`