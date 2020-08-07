import styled from 'styled-components';

const Button = styled.button.attrs(props => (props.type ?? {
	type: props.type,
}))`
	color: inherit;
	background-color: transparent;
	border: none;
	outline: none;
	margin: 0;
	padding: 0;

	&:hover {
		cursor: pointer;
	}
`;

export default Button;