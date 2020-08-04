import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../styles';
import { Flex } from '../styles';

const Container = styled.div`
	position: fixed;
	width: 40px;
	bottom: 0;
	height: 100%;
  left: ${props => (props.orientation === 'left' ? '50px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '50px')};
	z-index: 10;

	${media.desktop`
		left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
		right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
	`};

  ${media.tablet`
  	display: none;
  `};
`

const addCSS = css`
	height: 100%;

	&:after {
		content: "";
		margin-top: 20px;
		width: 1px;
		height: 90px;
		background-color: ${({ theme }) => theme.primary};
	}
`

const Side = ({ children, orientation }) => (
	<Container orientation={orientation} >
		<Flex justifyContent='end' alignItems='center' flexDirection='column' addCSS={addCSS} >
			{children}
		</Flex>
	</Container>
)

export default Side;