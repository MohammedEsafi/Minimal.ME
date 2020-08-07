import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Button } from '../styles';
import { Switcher } from '.';
import { navLinks } from '../config';
import { Link as GatsbyLink } from 'gatsby';

const Nav = styled.nav`
	color: ${({ theme }) => theme.primary};
`

const Link = styled(GatsbyLink)`
	padding: 10px;
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

const Navigation = ({ toggleMode }) =>  (
	<Nav>
		<Flex gap='30px' alignItems='center' >
			<Lists>
				{navLinks &&
					navLinks.map(({ name, url }, index) => (
						<Item key={index} ><Link to={url} >{name}</Link></Item>
					))
				}
			</Lists>
			<Button onClick={toggleMode} type='button' >
				<Switcher />
			</Button>
		</Flex>
	</Nav>
)

Navigation.propTypes = {
	toggleMode: PropTypes.func.isRequired,
}

export default Navigation;