import React from 'react';
import { Header, Flex } from '../styles';
import { Menu, Image } from '.';


const Navigation = () => (
	<Header>
		<Flex justifyContent='space-between' alignItems='center' >
			<Image />
			<nav>
				<Menu />
			</nav>
		</Flex>
	</Header>
)

export default Navigation;