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
		--bg-primary-hex: #ffffff;
		--bg-primary-rgba: rgba(255, 255, 255, .8);
		
		--bg-secondary: #F5F7FA;
		
		--text-primary: #212931;
		--text-secondary: #5C718A;
		
		--blue-primary: #007AFF;
		--blue-secondary: rgba(10,122,255,.1);
		
		// used for button hover states and logo (can remove)
		--color-primary: #212931;
		--logo-primary: #212931;

		--color-chalk: #006EF0;
		--color-chalk-secondary: #F1F8FF;

		--color-experts: #22722D;
		--color-experts-secondary: #F1FBF3;
		
		--github-text: #24292E;

		@media(prefers-color-scheme: dark) {
			
			--bg-primary-hex: #040506;
			--bg-primary-rgba: rgba(4,5,6,0.8);
			
			--bg-secondary: #090F15;

			--text-primary: #ffffff;
			--text-secondary: #667D99; 
			
			--blue-primary: #0A84FF;
			--blue-secondary: rgba(10,132,255,.1);
			
			
			
			// used for button hover states and logo
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
	  	background-color: var(--bg-primary-hex);
	  	font-family: 'Sohne', -apple-system, BlinkMacSystemFont, sans-serif;
	  	color: var(--text-primary);
	  	overflow-y: scroll;
	  	overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	body.dark {
		background-color: var(--bg-primary-hex);
		color: var(--text-primary);
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
	  	line-height: 1.4;
	}

	footer {
	  	margin-bottom:2rem;
	  	font-size: 14px;
  		color: var(--text-secondary);
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
