import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Side } from '.';
import { theme, Flex } from '../styles';
import Icons from '../icons';

const { colors, fonts, transition } = theme;

const Text = styled.a`
	writing-mode: vertical-rl;
	margin: 20px auto;
	font-size: 12px;
	text-transform: uppercase;
	font-family: ${fonts.secondary};
	transition: ${transition};
`

const FlexCSS = css`
	padding-bottom: 50px;

	&:hover {
		cursor: pointer;

		& > a {
			color: ${colors.accent};
			margin-bottom: 25px;
		}
		& > svg {
			fill: ${colors.accent};
		}
	}
`

const Scroll = () => {
	const [direction, setDirection] = useState('');

	useEffect(() => {
		setDirection('down');
	}, [direction]);

	return (
		<Side orientation='right' justifyContent='end'>
			<Flex alignItems='center' flexDirection='column' addCSS={FlexCSS} >
				<Text href='javascript:void(0)' onClick={(event) => event.preventDefault} >
					scroll {direction}
				</Text>
				<Icons.arrow.down side='20px' style={{ transition: `${transition}`, }} />
			</Flex>
		</Side>
	);
}

export default Scroll;