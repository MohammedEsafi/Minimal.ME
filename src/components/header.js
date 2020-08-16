import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { Flex, theme, media } from '../styles';
import { hex2rgba } from '../utils';
import { Brand, Navigation, Hamburger } from '.';

const DELTA = 5;

const { navHeight, navScrollHeight, transition } = theme;

const { timing } = transition;

const StyledHeader = styled.header`
	height: ${navHeight};
	width: 100%;
	position: fixed;
	padding: 0 50px;
	background-color: ${({ theme }) => theme.surface};
	transition-property: height, box-shadow;
	transition-duration: 500ms;
	transition-timing-function: ${timing};
	z-index: 20;

	${media.phone`
		padding: 0 25px;
	`};

	&.fixed {
		height: ${navScrollHeight};
		box-shadow: ${({ theme }) => hex2rgba(theme.primary, 0.1)} 0 -1px inset;
	}
`

const Height = css`
	height: 100%;
`

const Header = ({ toggleMode, theme }) => {
	const refHeader = useRef(null);
	const isFixed = useRef(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		const handleScroll = () => {
			let isONTOP = window.scrollY > DELTA

			if (isONTOP)
			{
				isFixed.current = true;
				refHeader.current.classList.add('fixed');
			}
			else
			{
				isFixed.current = false;
				refHeader.current.classList.remove('fixed');
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		};
	}, [theme])

	return (
		<StyledHeader ref={refHeader} className={isFixed.current ? 'fixed' : ''} >
			<Flex alignItems='center' justifyContent='space-between' addCSS={Height} >
				<Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
				<Brand />
				<Navigation menuOpen={menuOpen} toggleMode={toggleMode} />
			</Flex>
		</StyledHeader>
	)
}

Header.propTypes = {
	toggleMode: PropTypes.func.isRequired,
}

export default withTheme(Header);