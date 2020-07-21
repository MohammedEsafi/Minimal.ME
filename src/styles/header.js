import styled from 'styled-components';
import theme from './theme';

const { navHeight, fonts } = theme;

const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 50px;
	position: fixed;
	height: ${navHeight};
	font-family: ${fonts.secondary};
`;

export default Header;