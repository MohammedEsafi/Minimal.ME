import React from 'react';
import styled from 'styled-components';
import { Side } from '.';
import { Flex, Link } from '../styles';

const Text = styled.p`
	writing-mode: vertical-rl;
	margin: 20px auto;
`

const Scroll = () => (
	<Side orientation='right' >
		<Link to='' >
			<Flex alignItems='center' flexDirection='column'>
				<Text>
					hello@mesafi.com
				</Text>
			</Flex>
		</Link>
	</Side>
)

export default Scroll;