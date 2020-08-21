import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Button, media, theme } from '../styles';
import { Switcher, Split } from '.';
import { navLinks } from '../config';
import { Link as GatsbyLink } from 'gatsby';

const { transition : { timing } } = theme;

const Nav = styled.nav`
	color: ${({ theme }) => theme.primary};
	margin-right: 30px;

	${media.tablet`
		background-color: ${({ theme }) => theme.secondary};
		margin-right: 0;
		transform: translateY(-100%);
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		min-height: 100vh;
		padding: 150px 0;
		z-index: -1;
		transition: transform 200ms ${timing};

		&.visible {
			transform: translateY(0) !important;
		}
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
	<Flex alignItems='center' >
		<Nav className={menuOpen ? 'visible' : null} >
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
	menuOpen: PropTypes.bool.isRequired,
	toggleMode: PropTypes.func.isRequired,
}

export default Navigation;