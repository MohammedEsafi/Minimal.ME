import React from 'react';
import styled, { css } from 'styled-components';
import { Link, media, Flex } from '../styles';
import Icons from '../icons';
import { socialMedia } from '../config';

const Container = styled.div`
	position: fixed;
	width: 40px;
	padding-block: 40px;
	bottom: 0;
	height: 100%;
  left: 50px;
	z-index: 10;

	${media.desktop`
		left: 40px;
	`};

  ${media.tablet`
  	display: none;
  `};
`

const addCSS = css`
	height: 100%;
`

const Social = () => (
	<Container>
		<Flex justifyContent='flex-end' alignItems='center' flexDirection='column' addCSS={addCSS} >
			{socialMedia &&
				socialMedia.map(({ name, url }, index) => (
					<Link key={index} to={url} >
						<Icons name={name} side='20px' />
					</Link>
				))}
		</Flex>
	</Container>
)

export default Social;