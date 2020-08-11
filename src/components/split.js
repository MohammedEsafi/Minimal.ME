import React, { Fragment } from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

const { transition : { timing } } = theme;

const Finger = styled.span`
	display: inline-block;
`

const Split = ({ text }) => {
	text = text.replace(/\b[a-z]/g, char => char.toUpperCase())

	const Animate = (event) => {
		let Target = event.currentTarget;

		Target.animate(
			[
				{ transform: 'scale3d(1,1,1)' },
				{ transform: 'scale3d(1.25,.75,1)' },
				{ transform: 'scale3d(.75,1.25,1)' },
				{ transform: 'scale3d(1.15,.85,1)' },
				{ transform: 'scale3d(.95,1.05,1)' },
				{ transform: 'scale3d(1.05,.95,1)' },
				{ transform: 'scale3d(1,1,1)' }
			],
			{
				duration: 1000,
				easing: timing,
				fill: 'forwards'
			}
		)
	}

	return (
		<Fragment>
			{text &&
				[...text].map((finger, index) => {
					if (finger.match(/\s/))
						return finger
					else
					{
						return (
							<Finger key={index} aria-hidden="true" onMouseOver={Animate} onFocus={Animate} >
								{finger}
							</Finger>
						)
					}
			})}
		</Fragment>
	)
}

export default Split;