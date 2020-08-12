import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Flex, theme, media } from '../styles';
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
	z-index: 20;

	${media.phone`
		padding: 0 25px;
	`};
`

const Height = css`
	height: 100%;
`

const Header = ({ toggleMode }) => {
	const refHeader = useRef(null);

	const handleScroll = () => {
		const isONTOP = window.scrollY < DELTA

		refHeader.current.animate(
			[
				{
					height: isONTOP ? navHeight : navScrollHeight,
					boxShadow: isONTOP ? 'none' : `0 8px 8px #000000`,
				},
			],
			{
				duration: 1000,
				easing: timing,
				fill: 'forwards',
			}
		)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll)
		};
	}, [])

	return (
		<StyledHeader ref={refHeader} >
			<Flex alignItems='center' justifyContent='space-between' addCSS={Height} >
				<Hamburger />
				<Brand />
				<Navigation toggleMode={toggleMode} />
			</Flex>
		</StyledHeader>
	)
}

Header.propTypes = {
	toggleMode: PropTypes.func.isRequired,
}

export default Header;