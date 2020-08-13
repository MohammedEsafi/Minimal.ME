import styled from 'styled-components';
import { hex2rgba } from '../utils';
import media from './media';

const Heading = styled.h2`
	font-size: 5rem;
	position: relative;
	user-select: none;

	${media.tablet`
		font-size: 4.5rem;
	`};
	
	${media.phone`
		font-size: 4rem;
	`};

	&:after {
		content: '<' attr(data-second-title) ' />';
		position: absolute;
		color: ${({ theme }) => hex2rgba(theme.primary, 0.03)};
		right: 0;
		top: 0;
		z-index: -1;
	}
`

export default Heading;