import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from '../styles';
import { Flex } from '../styles';

const Container = styled.div`
	position: fixed;
	width: 40px;
	padding-block: 40px;
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
`

const Side = ({ children, orientation }) => (
	<Container orientation={orientation} >
		<Flex justifyContent='end' alignItems='center' flexDirection='column' addCSS={addCSS} >
			{children}
		</Flex>
	</Container>
)

Side.propTypes = {
	children: PropTypes.node.isRequired,
	orientation: PropTypes.oneOf(['left', 'right']),
}

export default Side;