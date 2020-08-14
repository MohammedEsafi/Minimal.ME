import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a.attrs(props => ({
	href: props.to,
}))`
	padding: ${props => props.padding};
	${props => props?.addCSS};
`

Link.defaultProps = {
	padding: '10px',
}

Link.propTypes = {
	to: PropTypes.string.isRequired,
}

export default Link;