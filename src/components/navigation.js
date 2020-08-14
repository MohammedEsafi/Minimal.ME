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
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		min-height: 100vh;
		padding: 150px 0;
		background-color: ${({ theme }) => theme.surface};
		z-index: -1;
		transform: translateY(${({ menuOpen }) => menuOpen ? '0' : '-100%'});
		/*box-shadow: 0 0 0 ${({ theme }) => theme.secondary};*/
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

	${media.tablet`
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 300px);
	`}
`

const Item = styled.li`
	margin: 0 5px;
`

const Navigation = ({ menuOpen, toggleMode }) =>  (
	<Flex gap='30px' alignItems='center' >
		<Nav menuOpen={menuOpen} >
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