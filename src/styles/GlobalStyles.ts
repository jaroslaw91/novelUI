import { createGlobalStyle, css } from 'styled-components'

import PoppinsMediumWoff from '../assets/fonts/PoppinsMedium.woff'
import PoppinsMediumWoff2 from '../assets/fonts/PoppinsMedium.woff2'
import PoppinsRegularWoff from '../assets/fonts/PoppinsRegular.woff'
import PoppinsRegularWoff2 from '../assets/fonts/PoppinsRegular.woff2'
import PoppinsSemiBoldWoff from '../assets/fonts/PoppinsSemiBold.woff'
import PoppinsSemiBoldWoff2 from '../assets/fonts/PoppinsSemiBold.woff2'

export const GlobalStyles = createGlobalStyle`
	${({ theme: { font, colors } }) =>
		css`
		@font-face {
			font-family: Poppins;
			src: url(${PoppinsRegularWoff2}) format('woff2'),
				url(${PoppinsRegularWoff}) format('woff');
			font-weight: 400;
		}
	
		@font-face {
			font-family: Poppins;
			src: url(${PoppinsMediumWoff2}) format('woff2'),
				url(${PoppinsMediumWoff}) format('woff');
			font-weight: 500;
		}
	
		@font-face {
			font-family: Poppins;
			src: url(${PoppinsSemiBoldWoff2}) format('woff2'),
				url(${PoppinsSemiBoldWoff}) format('woff');
			font-weight: 600;
		}
	
		:root {
			font-family: 'Poppins', sans-serif;
			font-weight: ${font.weights.regular};
	
			--toastify-color-light: ${colors.secondary};
			--toastify-color-dark: ${colors.secondary};
			--toastify-color-info: ${colors.toastInfo};;
			--toastify-color-success: ${colors.toastSuccess};
			--toastify-color-warning: ${colors.toastWarning};
			--toastify-color-error: ${colors.toastError};
			
			--toastify-icon-color-info: var(--toastify-color-info);
			--toastify-icon-color-success: var(--toastify-color-success);
			--toastify-icon-color-warning: var(--toastify-color-warning);
			--toastify-icon-color-error: var(--toastify-color-error);
			
			--toastify-toast-width: 320px;
			--toastify-toast-min-height: 64px;
			--toastify-toast-max-height: 800px;
			--toastify-font-family: 'Poppins', sans-serif;
			--toastify-z-index: 9999;
			
			--toastify-text-color-light: ${colors.main};
			--toastify-text-color-dark: ${colors.main};
		}
	
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}
	
		* {
			margin: 0;
		}
	
		main {
			display: block;
		}
	
		a {
			background-color: transparent;
		}
	
		img {
			border-style: none;
		}
	
		html,
		body {
			height: 100vh;
			font-size: ${font.sizes.default}
			line-height: ${font.lineHeight.default};
			color: ${colors.secondary};
			background-color: ${({ theme }) => theme.colors.main};
		}

		body {
			transition: background .5s, color .7s;
		}

		img,
		picture,
		video,
		canvas,
		svg {
			display: block;
			max-width: 100%;
		}

		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			overflow-wrap: break-word;
		}

		ul {
			list-style: none;
			padding: 0;
		}
	`}	
`
