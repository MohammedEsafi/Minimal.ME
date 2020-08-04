import styled from 'styled-components';

const Link = styled.a.attrs(props => ({
	href: props.to,
}))
`
	padding-block: ${props => props.paddingBlock};
	padding-inline: ${props => props.paddingInline};
	${props => props?.addCSS};
`

Link.defaultProps = {
	paddingBlock: '10px',
	paddingInline: '10px',
	to: 'javascript:void(0)',
}

export default Link;