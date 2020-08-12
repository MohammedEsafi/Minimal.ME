import styled from 'styled-components';
import media from './media';

const Section = styled.section`
	position: relative;
	margin: 0px auto;
	padding: 150px 0px;
	max-width: 1000px;

	${media.tablet`
		padding: 100px 0;
	`};
`

export default Section;