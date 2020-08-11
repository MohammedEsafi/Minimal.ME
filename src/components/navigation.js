import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Button, media } from '../styles';
import { Switcher, Split } from '.';
import { navLinks } from '../config';
import { Link as GatsbyLink } from 'gatsby';

const Nav = styled.nav`
	color: ${({ theme }) => theme.primary};

	${media.tablet`
		display: none;
	`};
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
	<Flex gap='30px' alignItems='center' >
		<Nav>
			<Lists>
				{navLinks &&
					navLinks.map(({ name, url }, index) => (
						<Item key={index} >
							<Link to={url} >
								<Split text={name} />
							</Link>
						</Item>
					))
				}
			</Lists>
		</Nav>
		<Button onClick={toggleMode} type='button' >
			<Switcher />
		</Button>
	</Flex>
)

Navigation.propTypes = {
	toggleMode: PropTypes.func.isRequired,
}

export default Navigation;