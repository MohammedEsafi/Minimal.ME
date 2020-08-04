import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Button, Link } from '../styles';
import Icons from '../icons';
import { Sun } from '.';
import { navLinks } from '../config';

const Nav = styled.nav`
	color: ${({ theme }) => theme.primary};
`

const Lists = styled.ul`
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
`

const Item = styled.li`
	margin: 0 5px;
`

const Navigation = ({ toggleMode }) => (
	<Nav>
		<Flex gap='30px' alignItems='center' >
			<Lists>
				{navLinks &&
					navLinks.map(({ name, url }) => (
						<Item><Link to={url} >{name}</Link></Item>
					))
				}
			</Lists>
			<Link onClick={toggleMode} lineHeight='0' >
				<Sun />
			</Link>
		</Flex>
	</Nav>
)

export default Navigation;