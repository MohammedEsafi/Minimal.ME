import styled from 'styled-components';
import PropTypes from 'prop-types';

const External = styled.a.attrs(props => ({
	href: props.to,
	target: '_blank',
}))`
	color: ${({ theme }) => theme.secondary};
	padding: 0;
	&:active, &:focus {
		outline: none;
	}
`

External.propTypes = {
	to: PropTypes.string.isRequired,
}

export default External;