import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--primary-light: #93776c; 
		--primary-main: #795548; 
		--primary-dark: #543b32;

		--secondary-light: #ffac33; 
		--secondary-main: #ff9800; 
		--secondary-dark: #b26a00;

		--dark: #17202A;
		--gray: #6B6B6B;
		--softy: #F9F9F9; 
	}
	
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 3px solid transparent;
		 	box-shadow: 0 0 0 3px var(--dark);
		}
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: var(--softy);
    color: var(--dark);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	a {
		color: var(--dark);
		text-decoration: none;
	}

	button, input {
		font-size: 1.6rem;
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background: var(--white) 50;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--gray);
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
