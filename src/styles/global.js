import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Fonts from './fonts';

const { colors, fonts } = theme;

const Global = createGlobalStyle`
	${Fonts};

	html {
		box-sizing: border-box;
		width: 100%;
		font-size: 10px;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0px;
		padding: 0px;
		width: 100%;
		min-height: 100%;
		overflow-x: hidden;
		background-color: ${colors.background};
		color: ${colors.onbackground};
		line-height: 1;
		font-family: ${fonts.primary};
		
	}

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		cursor: pointer;

		&:hover,
		&:focus {
			color: ${colors.accent};
		}
	}

	#root {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 1fr auto;
		grid-template-columns: 100%;
	}
`

export default Global;