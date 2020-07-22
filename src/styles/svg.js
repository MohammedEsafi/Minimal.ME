import styled from 'styled-components';

const SVG = styled.svg.attrs({ 
	version: '1.1', 
	xmlns: 'http://www.w3.org/2000/svg', 
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
	fill: ${props => props.fill};
	width: ${props => props.side}; 
	height: ${props => props.side}; 
`

SVG.defaultProps = {
	fill: '#CCCCCC',
	side: '1.6rem',
}

export default SVG;