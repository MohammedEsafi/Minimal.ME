import React from 'react';
import styled, { css } from 'styled-components';
import { Link, Flex } from '../styles';

const Container = styled.footer`
	width: 100%;
`

const addCSS = css`
	min-height: 70px;
`

const Footer = () => (
	<Container>
		<Flex justifyContent='center' addCSS={addCSS} >
			<Link to='https://github.com/MohammedEsafi/V1'>
				<p>Designed & Built by Mohammed Esafi</p>
			</Link>
		</Flex>
	</Container>
)

export default Footer;