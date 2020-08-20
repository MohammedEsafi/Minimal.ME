import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { fonts } = theme;

const Global = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100%;
		font-size: 10px;
		height: -webkit-fill-available;
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
		background-color: ${({ theme }) => theme.surface};
		color: ${({ theme }) => theme.primary};
		font-size: 1.8rem;
		line-height: 1.8;
		font-family: ${fonts.primary};
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		cursor: pointer;
	}

	p {
		margin: 0px 0px 1.8rem;
	}

	#root {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 1fr auto;
		grid-template-columns: 100%;
	}
`

export default Global;