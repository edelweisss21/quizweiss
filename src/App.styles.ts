import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './assets/images/bg.jpg';
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	@font-face {
    font-family: "Poppins";
    src: url(${PoppinsRegular});
    font-style: normal;
    font-weight: normal;
}

	body {
		background-image: url(${bgImage});
		background-size: cover;
		margin: 0;
		padding: 0 20px;
		font-family: "Poppins", sans-serif;
		display: flex;
    justify-content: center;
	}

	* {
		box-sizing: border-box;
	}
`;

export const Wrapper = styled.div`
	text-align: center;
	> p {
		color: #fff;
	}

	.score {
		color: #fff;
		font-size: 2rem;
		text-shadow: 1px 4px 5px #000;
		margin: 0;
	}

	.number {
		font-size: 20px;
	}

	h1 {
		font-size: 70px;
		text-align: center;
		margin: 20px;
		background: linear-gradient(
			180deg,
			rgb(89, 226, 255),
			rgba(255, 255, 255, 0.98),
			rgba(255, 255, 255, 0)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-shadow: 2px 3px 1px #151515;
	}

	.start,
	.nextQuestion {
		transition: background-color 0.3s ease;
		font-family: 'Poppins', sans-serif;
		margin-top: 20px;
		cursor: pointer;
		background-color: rgba(240, 240, 240, 0.75);
		border: 2px solid #0085a3;
		padding: 10px;
		border-radius: 10px;
		max-width: 150px;
		font-size: 16px;
		width: 100%;
	}

	.start:hover,
	.nextQuestion:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
`;
