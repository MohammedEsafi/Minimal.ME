import styled from "styled-components";
import theme from './theme'

const { colors, fontSizes, fonts, borderRadius } = theme;

const Button = styled.button`
	color: ${colors.green};
	background-color: transparent;
	border: 2px solid ${colors.green};
	border-radius: ${borderRadius};
	font-size: ${fontSizes.smish};
	font-family: ${fonts.SFMono};
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	padding: 0.75rem 1rem;

	:focus {
		outline: none;
	}

	:hover, :active {
		background: #FDFDFD;
	}
`;

export default Button;