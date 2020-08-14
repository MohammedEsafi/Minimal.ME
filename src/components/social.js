import React from 'react';
import styled, { css } from 'styled-components';
import { Link, media, Flex } from '../styles';
import Icons from '../icons';
import { socialMedia } from '../config';

const Container = styled.div`
	position: fixed;
	width: 40px;
	padding: 40px 0;
	bottom: 0;
	height: 100%;
  left: 50px;
	z-index: 10;

	${media.desktop`
		left: 40px;
	`};

  ${media.tablet`
		position: initial;
    width: initial;
    padding: 0;
    height: auto;
  `};
`

const addCSS = css`
	height: 100%;

	${media.tablet`
		flex-direction: row;
  `};
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