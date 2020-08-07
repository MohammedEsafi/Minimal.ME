import React from 'react';
import { Section, Flex, media } from '../styles';
import styled, { css } from 'styled-components';
import { Skills } from '../components';

const Text = styled.p`
	
`

const Headling = styled.h2`
	font-size: 5rem;
`

const LINEBefore = css`
	&:before {
		content: '';
		width: 200px;
		height: 2px;
		background-color: ${({ theme }) => theme.primary};
		margin: 1.4rem 2rem auto auto;

		${media.tablet`
	  	display: none;
	  `};
	}
`

const About = () => (
	<Section id='about' >
		<Flex flexDirection='column' >
			<Headling>
				About
			</Headling>
			<Flex flexDirection='row' addCSS={LINEBefore} >
				<div>
					<Text>Hello! I'm Mohammed, a software engineer based in Morocco !<span role='img' aria-label='Morocco' > 🇲🇦</span></Text>
					<Text>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</Text>
					<Text>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</Text>
				</div>
			</Flex>
			<Skills />
		</Flex>
	</Section>
)

export default About;