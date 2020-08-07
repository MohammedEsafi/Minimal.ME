import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a.attrs(props => ({
	href: props.to,
}))`
	padding-block: ${props => props.paddingBlock};
	padding-inline: ${props => props.paddingInline};
	${props => props?.addCSS};
`

Link.defaultProps = {
	paddingBlock: '10px',
	paddingInline: '10px',
}

Link.propTypes = {
	to: PropTypes.string.isRequired,
}

export default Link;