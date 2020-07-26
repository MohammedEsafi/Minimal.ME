import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	align-items: ${props => props.alignItems};
	gap: ${props => ((props?.rowGap || props.gap) + " " + (props?.columnGap || props.gap))};
	justify-content: ${props => props.justifyContent};
	grid-template-columns: ${props => props.templateColumns};
	grid-template-rows: ${props => props.templateRows};
	${props => props?.addCSS}
`

Grid.defaultProps = {
	alignItems: 'stretch',
	justifyContent: 'flex-start',
	gap: '0px',
	templateColumns: 'none',
	templateRows: 'none',
}

export default Grid;