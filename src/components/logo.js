import React from 'react';
import styled, { css } from 'styled-components';
import { theme, Link } from '../styles';

const { colors } = theme;

const Text = styled.p`
	font-size: 25px;
	color: ${({ theme }) => theme.surface};
	background-color: ${({ theme }) => theme.primary};
	margin: 0;
	line-height: 1;
	padding: 6px 6px 6px 7px;
	user-select: none;
`

const addCSS = css`
	padding: 0;
`

const Logo = () => (
	<Link to='/' addCSS={addCSS} >
		<Text>
			M.
		</Text>
	</Link>
)

export default Logo;