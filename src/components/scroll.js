import React from 'react';
import styled from 'styled-components';
import { Side } from '.';
import { Flex, Link } from '../styles';
import Icons from '../icons';

const Text = styled.p`
	writing-mode: vertical-rl;
	text-transform: uppercase;
`

const Scroll = () => {
	return (
		<Side orientation='right' >
			<Link to='/#about' >
				<Flex alignItems='center' flexDirection='column' >
					<Text>
						scroll
					</Text>
					<Icons name='down-arrow' />
				</Flex>
			</Link>
		</Side>
	)
}

export default Scroll;