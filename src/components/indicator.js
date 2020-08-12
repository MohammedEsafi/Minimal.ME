import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { media, Flex, theme } from '../styles';
import { hex2rgba } from '../utils';

const { transition: { timing } } = theme;

const Container = styled.div`
	--backgroundColor: ${({ theme }) => hex2rgba(theme.primary, 0.3)};
	position: absolute;
	width: 40px;
	padding-block: 40px;
	bottom: 0;
	height: 100%;
  right: 50px;
	z-index: 10;

	${media.desktop`
		right: 40px;
	`};

  ${media.tablet`
  	display: none;
  `};
`

const addCSS = css`
	height: 100%;
`

const Animation = keyframes`
	from { transform: translateY(-100%); }
	to { transform: translateY(200%); }
`

const Line = styled.span`
	position: relative;
	overflow: hidden;
	width: 1px;
	height: 100px;
	background-color: var(--backgroundColor);

	&:after {
		position: absolute;
		content: '';
		background-color: ${({ theme }) => theme.primary};
		width: 100%;
		height: 50%;
		top: 0;
		left: 0;
		animation-name: ${Animation};
		animation-duration: 1400ms;
		animation-iteration-count: infinite;
		animation-timing-function: ${timing};
	}
`

const Text = styled.p`
	color: var(--backgroundColor);
	writing-mode: vertical-rl;
	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
`

const Indicator = () => (
	<Container>
		<Flex justifyContent='flex-end' alignItems='center' flexDirection='column' addCSS={addCSS} >
			<Text>
				explore world
			</Text>
			<Line />
		</Flex>
	</Container>
)

export default Indicator;