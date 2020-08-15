import styled from 'styled-components';
import media from './media';

const Heading = styled.h2`
	font-size: 7rem;
	display: flex;
	line-height: 1.1;
	font-weight: 900;
	flex-direction: column;
	text-transform: uppercase;
	position: relative;
	user-select: none;

	${media.tablet`
		font-size: 6rem;
	`};
	
	${media.phone`
		font-size: 5rem;
	`};
`

export default Heading;