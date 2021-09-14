function GlobalStyle(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }

        html {
          scroll-behavior: smooth;
        }

        :root {
          --body: 16px;
          --small: 14px;
          --h1: 20px;
          --h2: 18px;
          --h3: 16px;

          --primary-100: hsla(0, 0%, 100%, 1);
          --primary-200: hsla(224, 33.3%, 95.9%, 1);
          --primary-300: hsla(224, 43.5%, 91%, 1);
          --primary-400: hsla(224, 43.7%, 86.1%, 1);

          --accent-100: hsla(224, 24%, 64.9%, 1);
          --accent-200: hsla(224, 27.8%, 54.9%, 1);
          --accent-300: hsla(224, 35.7%, 45.1%, 1);
          --accent-400: hsla(224, 36.1%, 19%, 1);

          --text-primary: hsla(224, 36.1%, 19%, 1);
          --text-accent: var(--accent-300);
          --text-accent-bg: hsla(224, 50.7%, 45.1%, 0.1);

          --button-fill: var(--primary-100);
          --button-border: var(--primary-300);
          --button-hover: hsl(224, 40%, 98%);
          --button-arrow-hover: var(--accent-400);
          --button-shadow: 0px 1px 0px 0px rgba(0, 39, 78, 0.04);

          --github-text: #24292e;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --primary-100: hsla(224, 33%, 16%, 1);
            --primary-200: hsla(224, 30.3%, 12.9%, 1);
            --primary-300: hsla(224, 39.1%, 9%, 1);
            --primary-400: hsla(224, 60%, 4.9%, 1);

            --accent-100: hsla(224, 33.9%, 48%, 1);
            --accent-200: hsla(224, 31.1%, 53.9%, 1);
            --accent-300: hsla(224, 28%, 58%, 1);
            --accent-400: hsla(224, 30.3%, 65.1%, 1);

            --text-primary: rgba(255, 255, 255, 1);
            --text-accent: var(--accent-400);
            --text-accent-bg: hsla(224, 50.3%, 65.1%, 0.1);

            --button-fill: hsl(224, 30%, 19%);
            --button-border: hsl(224, 30%, 24%);
            --button-hover: hsl(224, 29%, 19%);
            --button-arrow-hover: var(--accent-300);
            --button-shadow: 0px 1px 0px 0px hsla(224, 98%, 8%, 0.12);

            --github-text: #ffffff;
          }
        }

        @media only screen and (min-width: 768px) {
          :root {
            --h1: 24px;
            --h2: 20px;
            --h3: 18px;
          }
        }

        body {
          background-color: var(--primary-100);
          font-family: "Sohne", -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text-primary);
          overflow-y: scroll;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        body.dark {
          background-color: var(--primary-100);
          color: var(--text-primary);
        }

        html,
        body {
          width: 100%;
          height: 100%;
        }

        html {
          font-size: 16px;
          -webkit-overflow-scrolling: touch;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          line-height: 1.5;
        }

        footer {
          margin-bottom: 2rem;
          font-size: var(--small);
          color: var(--text-accent);
        }

        @media only screen and (min-width: 768px) {
          footer {
            margin-bottom: 1rem;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }

        ::selection {
          color: var(--primary-100);
          background: var(--text-primary);
          text-shadow: none;
        }

        @media only screen and (min-width: 768px) {
          html {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  )
}

export default GlobalStyle
