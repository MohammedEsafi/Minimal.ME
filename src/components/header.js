import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
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
	transition: height, box-shadow 1s ${timing};
	z-index: 20;

	${media.phone`
		padding: 0 25px;
	`};

	&.fixed {
		height: ${navScrollHeight};
		box-shadow: 0 8px 8px ${({ theme }) => theme.primary};
	}
`

const Height = css`
	height: 100%;
`

const Header = ({ toggleMode, theme }) => {
	const refHeader = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const isONTOP = window.scrollY > DELTA

			if (isONTOP)
				refHeader.current.classList.add('fixed');
			else
				refHeader.current.classList.remove('fixed');
		}

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll)
		};
	}, [theme])

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

export default withTheme(Header);