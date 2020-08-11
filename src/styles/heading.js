import styled from 'styled-components';
import { hex2rgba } from '../utils';

const Heading = styled.h2`
	font-size: 5rem;
	position: relative;
	user-select: none;

	&:after {
		content: '<' attr(data-second-title) ' />';
		position: absolute;
		color: ${({ theme }) => hex2rgba(theme.primary, 0.03)};
		right: 0;
		top: 0;
	}
`

export default Heading;