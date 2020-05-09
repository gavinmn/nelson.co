import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
	
	* {
 		margin:0;
  		padding:0;
	}

	:root {
		--bg-hex: #ffffff;
		--bg-rgba: rgba(255, 255, 255, .8);
		--color: #1d1d1f;
		--secondary-color: #8B8F9B;
		--primary-color: #6466FF;

		--button-bg: rgba(100,102,255,0.10);

		--chalk-button: rgba(64,152,255,0.10);
		--experts-button: rgba(136,207,77,0.15);

		--github-text: #24292E;
		--github-bg: rgba(36,41,46,0.10);

		@media(prefers-color-scheme: dark) {
			--bg-hex: #1d1d1f;
			--bg-rgba: rgba(29,29,31,0.8);
			--color: #ffffff;
			--secondary-color: #8B8F9B; 
			--primary-color: #6A74FF;

			--button-bg: rgba(100,102,255,0.20);

			--chalk-button: rgba(64,152,255,0.20);
			--experts-button: rgba(136,207,77,0.15);

			--github-text: #ffffff;
			--github-bg: rgba(0,0,0,0.10);
		}
	}

	body {
	  	background-color: var(--bg-hex);
	  	font-family: 'National 2', -apple-system, BlinkMacSystemFont, sans-serif;
	  	color: var(--color);
	  	overflow-y: scroll;
	  	overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	body.dark {
		background-color: var(--bg-hex);
		color: var(--color);
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
  		color: var(--secondary-color);
	}

	img {
	  	max-width: 100%;
	  	height:auto;
	}
	

	::selection {
		color: white;
	  	background: var(--primary-color);
	}

	@media only screen and (min-width: 722px) {
  		html {
    		font-size: 32px;
  		}
  	}
`
