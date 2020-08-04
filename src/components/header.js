import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Flex } from '../styles';
import { Logo, Navigation } from '.';

const StyledHeader = styled.header`
	height: 100px;
	width: 100%;
	position: fixed;
	padding: 0 50px;
	background-color: ${({ theme }) => theme.surface};
	z-index: 20;
`

const Height = css`
	height: 100%;
`

const Header = ({ toggleMode }) => (
	<StyledHeader>
		<Flex alignItems='center' justifyContent='space-between' addCSS={Height} >
			<Logo />
			<Navigation toggleMode={toggleMode} />
		</Flex>
	</StyledHeader>
)

Header.propTypes = {
	toggleMode: PropTypes.func.isRequired,
}

export default Header;