import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../styles';
import { Flex } from '../styles';

const Container = styled.div`
	position: fixed;
	width: 40px;
	bottom: 0;
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

const Height = css`
	height: 100%;
`

const Side = ({ children, orientation, justifyContent }) => (
	<Container orientation={orientation} >
		<Flex justifyContent={justifyContent} alignItems='center' flexDirection='column' addCSS={Height} >
			{children}
		</Flex>
	</Container>
)

export default Side;