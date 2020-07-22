import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Flex, theme } from '../styles';
import Icons from '../icons'
import { navLinks } from '../config'

const { colors, transition } = theme;

const OrderedList = styled.ol`
	display: flex;
	margin: 0px;
	padding: 0px;
	counter-reset: item-counter;
`

const ListItem = styled.li`
	font-size: 1.3rem;
  margin: 0px 10px;
  counter-increment: item-counter;
  list-style: none;

  &:before {
  	content: "0" counter(item-counter) ".";
  	color: ${colors.accent};
  }
`

const ListLink = styled.a`
  padding: 12px 10px;
  transition: ${transition};
`

const Menu = () => {

	useEffect(() => {
		console.log("NONE"); //"Icons: \n" + "Icons" + "\nEND"
	});

	return (
		<Flex alignItems='center' gap='12px' >
			<OrderedList>
				{navLinks.map(({name, url}, index) => (
					<ListItem key={index} >
						<ListLink href={url}>
							{name}
						</ListLink>
					</ListItem>
				))}
			</OrderedList>
			<Button paddingInline='0.5rem' paddingBlock='0.5rem' >
				<a href='/resume.pdf' target='_blank'>
					<Icons.document fill={colors.accent} side='2rem' />
				</a>
			</Button>
		</Flex>
	);
}

export default Menu;