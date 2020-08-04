import React from 'react';
import { Section, Flex, theme } from '../styles';
import styled from 'styled-components';

const { colors } = theme;

const Text = styled.p`
	& > span {
		background-color: ${colors.secondary};
		padding: 4px 4px 0px;
	}
`

const Headling = styled.h2`
	font-size: 5rem;
`

const About = () => (
	<Section id='about' >
		<Flex flexDirection='column' >
			<Headling>
				About
			</Headling>
			<Text>Hello! I'm Brittany, a software engineer based in Boston, MA.</Text>
			<Text>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</Text>
			<Text>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</Text>
			<Text>Here are a few technologies I've been working with recently</Text>
		</Flex>
	</Section>
)

export default About;