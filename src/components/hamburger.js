import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Button, media, theme } from '../styles';

const { transition : { timing } } = theme;

const addCSS = css`
	display: none;

	${media.tablet`
		display: block;
	`};
`

const Pad = styled.div`
	position: relative;
	margin: 10px;
	width: 20px;
	height: 20px;
`

const Line = styled.span`
	width: 20px;
	height: 2px;
	position: absolute;
	transform: translateY(-50%);
	background: ${({ theme }) => theme.primary};
	transition: all 300ms ${timing};
	left: 0;

	&:first-child {
		top: 15%;

		.arrow-it & {
			width: 10px;
			transform: rotate(-45deg);
			top: 6px;
			left: -2px;
		}
	}

	&:nth-child(2) {
		top: 50%;
	}

	&:last-child {
		top: 85%;

		.arrow-it & {
			width: 10px;
			transform: rotate(45deg);
			top: 12px;
			left: -2px;
		}
	}
`

const Hamburger = ({ menuOpen, toggleMenu }) => (
	<Button addCSS={addCSS} onClick={toggleMenu} >
		<Pad className={menuOpen ? 'arrow-it' : ''} >
			<Line></Line>
			<Line></Line>
			<Line></Line>
		</Pad>
	</Button>
)

Hamburger.propTypes = {
	menuOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
}

export default Hamburger;