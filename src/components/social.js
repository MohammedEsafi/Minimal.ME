import React from 'react';
import { Side } from '.';
import { Link } from '../styles';
import Icons from '../icons';
import { socialMedia } from '../config';

const Social = () => (
	<Side orientation='left' >
		{socialMedia &&
			socialMedia.map(({ name, url }) => (
				<Link to={url} >
					<Icons name={name} side='18px' />
				</Link>
			))}
	</Side>
)

export default Social;