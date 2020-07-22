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
		padding: ${props => props.paddingInline} ${props => props.paddingBlock};
		width: ${props => props.width};
		height: ${props => props.height};
		border-radius: ${borderRadius};
		border: 1px solid ${colors.accent};
		transition: ${transition};
		line-height: 0;
	}

	& > a:focus, a:hover {
		background-color: ${colors.hover};
	}
`;

Button.defaultProps = {
	width: 'auto',
	height: 'auto',
	paddingInline: '1rem',
	paddingBlock: '1.25rem',
}

export default Button;