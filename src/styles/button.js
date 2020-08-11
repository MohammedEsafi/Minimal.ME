import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button.attrs(props => (props.type ?? {
	type: props.type,
}))`
	color: inherit;
	background-color: transparent;
	border: none;
	outline: none;
	margin: 0;
	padding: 0;

	${props => props?.addCSS};

	&:hover {
		cursor: pointer;
	}
`;

Button.propTypes = {
	type: PropTypes.string,
}

export default Button;