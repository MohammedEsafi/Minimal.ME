import React from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Flex } from '../styles';
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

const Title = ({ title, ariaLabel, align }) => (
	<Flex alignItems={align} flexDirection='column' >
		<Icons name='waves' side='50px auto' addCSS={addCSS} />
		<Heading aria-label={ariaLabel}>
			{title &&
				[...title].map((text, index) => (
					<span key={index}>
						{text}
					</span>
				))
			}
		</Heading>
	</Flex>
)

Title.defaultProps = {
	align: 'flex-start',
}

Title.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	title: PropTypes.arrayOf(PropTypes.string).isRequired,
	align: PropTypes.string,
}

export default Title;