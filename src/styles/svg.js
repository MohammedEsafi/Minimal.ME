import styled from 'styled-components';
import theme from './theme';

const { colors } = theme;

const SVG = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	role: 'img',
})`
	fill: ${props => props.fill};
	width: ${props => props.side}; 
	height: ${props => props.side};

	&:hover,
	&:focus {
		fill: ${colors.accent};
	}
`

SVG.defaultProps = {
	fill: colors.onbackground,
	side: '1.6rem',
}

export default SVG;