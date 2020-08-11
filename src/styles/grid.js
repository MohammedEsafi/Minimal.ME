import styled, { css } from 'styled-components';

const Grid = styled.div`
	display: grid;
	gap: ${props => ((props?.rowGap || props.gap) + " " + (props?.columnGap || props.gap))};
	
	${({ alignItems }) => 
		alignItems && css`
			align-items: ${alignItems}
	`};
	
	${({ justifyContent }) => 
		justifyContent && css`
			justify-content: ${justifyContent}
	`};

	${({ templateColumns }) => 
		templateColumns && css`
			grid-template-columns: ${templateColumns}
	`};

	${({ templateRows }) => 
		templateRows && css`
			grid-template-rows: ${templateRows}
	`};

	${props => props?.addCSS};
`

Grid.defaultProps = {
	gap: '0',
}

export default Grid;