import styled from 'styled-components';
import media from './media';

const Main = styled.main`
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-height: 100vh;
	counter-reset: section -1;
	padding: 0 150px;
	${media.desktop`
		padding: 0 100px;
	`};
	${media.tablet`
		padding: 0 50px;
	`};
	${media.phone`
		padding: 0 25px;
	`};
`

export default Main;