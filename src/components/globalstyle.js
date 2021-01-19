import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
	
	* {
		 margin:0;
		  padding:0;
		  -webkit-font-smoothing: antialiased;
	}
	
	html {
		scroll-behavior: smooth;
	}

	:root {
		--bg-primary-hex: #ffffff;
		--bg-primary-rgba: rgba(255, 255, 255, .8);
		
		--bg-secondary: #F5F7FA;
		
		--text-primary: #1A2028;
		--text-secondary: #517095;
		
		--blue-primary: #007AFF;
		--blue-secondary: rgba(10,122,255,.1);
		
		// used for button hover states and logo
		--color-primary: #0F1A24;
		--logo-primary: #0F1A24;

		--color-chalk: #006EF0;
		--color-chalk-secondary: #F1F8FF;

		--color-experts: #22722D;
		--color-experts-secondary: #F1FBF3;
		
		--github-text: #24292E;
		
		--font-xs: 14px;
		--font-s: 16px;
		--font-m: 18px;
		--font-l: 26px;
		
		// --lh-xs: 20px;
		// --lh-s: 24px;
		// --lh-m: 26px;
		// --lh-l: 32px;
		// 
		@media only screen and (min-width: 722px) { 
			--font-xs: 16px;
			--font-s: 18px;
			--font-m: 20px;
			--font-l: 28px;
			
			// --lh-xs: 24px;
			// --lh-s: 26px;
			// --lh-m: 28px;
			// --lh-l: 36px;
		}
		

		@media(prefers-color-scheme: dark) {
			
			--bg-primary-hex: #212831;
			--bg-primary-rgba: rgba(33,40,49,0.8);
			
			--bg-secondary: #1A2028;

			--text-primary: #F5F7FA;
			--text-secondary: #7A91AE; 
			
			--blue-primary: #0A84FF;
			--blue-secondary: rgba(10,132,255,.1);
			
			
			
			// used for button hover states and logo
			--color-primary: #F5F7FA;
			--logo-primary: #F5F7FA;
			
			
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
		  line-height: 1.46;
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
