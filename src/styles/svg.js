import styled from 'styled-components';

const SVG = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	role: 'img',
})`
	fill: ${props => props.fill};
	width: ${props => props.side}; 
	height: ${props => props.side};
	${props => props?.addCSS};
	pointer-events: none;
`

SVG.defaultProps = {
	fill: 'currentColor',
	side: '1.8rem',
}

export default SVG;