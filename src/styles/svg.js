import styled from 'styled-components';

const SVG = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	role: 'img',
})`
	fill: ${props => props.fill};

	width: ${({ side }) => (
		side.split(" ")[0]
	)}; 

	height: ${({ side }) => {
		side = side.split(" ")

		if (side.lenght === 1)
			return side[0]
		else
			return side[1]
	}};

	${props => props?.addCSS};
	pointer-events: none;
`

SVG.defaultProps = {
	fill: 'currentColor',
	side: '1.8rem',
}

export default SVG;