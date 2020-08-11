import React from 'react';
import styled, { css } from 'styled-components';
import { Button, media } from '../styles';

const addCSS = css`
	display: none;

	${media.tablet`
		display: block;
	`};
`

const Pad = styled.div`
	padding: 10px;
	display: flex;
	width: 40px;
	height: 40px;
	flex-direction: column;
	justify-content: space-around;
`

const Line = styled.span`
	width: 100%;
	height: 2px;
	background: ${({ theme }) => theme.primary};
`

const Hamburger = () => (
	<Button addCSS={addCSS} >
		<Pad>
			<Line></Line>
			<Line></Line>
			<Line></Line>
		</Pad>
	</Button>
)

export default Hamburger;