import styled, { css } from 'styled-components';

const Flex = styled.div`
	display: flex;

	${({ alignItems }) => 
		alignItems && css`
			align-items: ${alignItems}
	`};

	${({ gap }) => 
		gap && css`
			gap: ${gap}
	`};
	
	${({ justifyContent }) => 
		justifyContent && css`
			justify-content: ${justifyContent}
	`};

	${({ flexDirection }) =>
		flexDirection && css`
			flex-direction: ${flexDirection}
	`};

	${props => props?.addCSS};
`

export default Flex;