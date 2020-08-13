import React from 'react';
import styled, { css } from 'styled-components';
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
	padding: 10px;
	display: flex;
	width: 40px;
	height: 40px;
	flex-direction: column;
	justify-content: space-around;
`

const Line = styled.span`
	width: 20px;
	height: 2px;
	background: ${({ theme }) => theme.primary};
	transition: all 300ms ${timing};

	.arrow-it &:first-child {
		width: 10px;
		transform: rotate(-35deg);
		position: absolute;
		top: 16px;
		left: 10px;
	}

	.arrow-it &:last-child {
		width: 10px;
		transform: rotate(35deg);
		position: absolute;
		bottom: 16px;
		left: 10px;
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

export default Hamburger;