import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100%;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		width: 100%;
		min-height: 100%;
		overflow-x: hidden;
		background-color: rgb(10, 25, 47);
		color: ${colors.slate};
		line-height: 1.3;
		font-family: ${fonts.Calibre};
		font-size: ${fontSizes.xl};
	}

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		position: relative;
		transition: ${theme.transition};
		cursor: pointer;

		&:hover,
		&:focus {
			color: ${colors.green};
		}
	}

	button {
		cursor: pointer;
		border: 0;
		border-radius: 0;

		&:focus,
		&:active {
			outline-color: ${colors.lightblue};
		}
	}
`

export default GlobalStyle;