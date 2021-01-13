import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
	
	* {
 		margin:0;
  		padding:0;
	}
	
	html {
		scroll-behavior: smooth;
	}

	:root {
		--bg-hex: #ffffff;
		--bg-rgba: rgba(255, 255, 255, .8);

		--wash-primary: rgba(4,5,6,1);
		--wash-secondary: #76767E;
		
		--color-primary: rgba(4,5,6,1);
		--logo-primary: rgba(4,5,6,1);

		--color-monterey-secondary: ;

		--color-chalk: #006EF0;
		--color-chalk-secondary: #F1F8FF;

		--color-experts: #22722D;
		--color-experts-secondary: #F1FBF3;
		
		--github-text: #24292E;

		@media(prefers-color-scheme: dark) {
			
			--bg-hex: rgba(4,5,6,1);
			--bg-rgba: rgba(4,5,6,0.8);

			--wash-primary: #ffffff;
			--wash-secondary: #84848B; 

			--color-primary: #ffffff;
			--logo-primary: #ffffff;

			--color-chalk: #1A83FF;
			--color-chalk-secondary: #1A212D;

			--color-experts: #1E992F;
			--color-experts-secondary: #1A2620;

			--github-text: #ffffff;
		}
	}

	body {
	  	background-color: var(--bg-hex);
	  	font-family: 'Sohne', -apple-system, BlinkMacSystemFont, sans-serif;
	  	color: var(--wash-primary);
	  	overflow-y: scroll;
	  	overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	body.dark {
		background-color: var(--bg-hex);
		color: var(--wash-primary);
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
  		color: var(--wash-secondary);
	}

	img {
	  	max-width: 100%;
	  	height:auto;
	}
	

	::selection {
		color: white;
	  	background: var(--color-primary);
	}

	@media only screen and (min-width: 722px) {
  		html {
    		font-size: 32px;
  		}
  	}
`
