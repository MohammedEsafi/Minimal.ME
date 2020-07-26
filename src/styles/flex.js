import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	align-items: ${props => props.alignItems};
	width: 100%;
	gap: ${props => props.gap};
	justify-content: ${props => props.justifyContent};
	flex-direction: ${props => props.flexDirection};
	${props => props?.addCSS}
`

Flex.defaultProps = {
	alignItems: 'stretch',
	justifyContent: 'flex-start',
	gap: '0px',
	flexDirection: 'inherit',
}

export default Flex;