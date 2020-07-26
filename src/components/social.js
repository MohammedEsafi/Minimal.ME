import React from 'react';
import { Side } from '.';
import Icons from '../icons';
import { theme } from '../styles';

const { transition } = theme;

const Social = () => (
	<Side orientation='left' justifyContent='center'>
		<a href="/#" >
			<Icons.github side='20px' style={{ transition: `${transition}`, }} />
		</a>
		<a href="/#">
			<Icons.linkedin side='20px' />
		</a>
		<a href="/#">
			<Icons.twitter side='20px' />
		</a>
		<a href="/#">
			<Icons.dribbble side='20px' />
		</a>
	</Side>
)

export default Social;