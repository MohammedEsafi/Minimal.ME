import React, { Fragment } from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from '../styles';
import Icons from '../icons';

const addCSS = css`
	& > polyline {
		stroke-dashoffset: 2e-05;
    stroke-dasharray: none;
    fill: none;
    stroke: ${({ theme }) => theme.primary};
    stroke-width: 5px;
	}
`

const Title = ({ title, splittedTitle }) => (
	<Fragment>
		<Icons name='waves' side='50px auto' addCSS={addCSS} />
		<Heading aria-label={title}>
			{splittedTitle &&
				[...splittedTitle].map((text, index) => (
					<span key={index}>
						{text}
					</span>
				))
			}
		</Heading>
	</Fragment>
)

Title.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Title;