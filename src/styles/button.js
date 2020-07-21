import styled from 'styled-components';
import theme from './theme';

const { colors, fonts, borderRadius, transition } = theme;

const Button = styled.button`
	padding: 0px;
	color: ${colors.accent};
	background-color: transparent;
	font-family: ${fonts.secondary};
	border-radius: ${borderRadius};
	border: none;
	outline: none;

	& > a {
		padding: 1rem 1.25rem;
		border-radius: borderRadius;
		border: 1px solid ${colors.accent};
		transition: ${transition};
	}

	& > a:focus, a:hover {
		background-color: ${colors.hover};
	}
`;

export default Button;