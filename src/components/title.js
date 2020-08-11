import React from 'react';
import { Heading } from '../styles';
import { Split } from '.';

const Title = ({ title, secondTitle }) => (
	<Heading aria-label={title} data-second-title={secondTitle} >
		<Split text={title} />
	</Heading>
)

export default Title;