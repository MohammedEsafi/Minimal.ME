import React from 'react';
import styled from 'styled-components';
import { Section, theme, Grid } from '../styles';

const { colors, fonts } = theme;

const TextContainer = styled.div`
	font-size: 1.8rem;
`

const Heading = styled.h2`
	font-size: 3.2rem;
	display: flex;
	align-items: center;
	margin: 10px 0px 40px;
	white-space: nowrap;

	&:before {
		content: "0" counter(section) ".";
		margin-right: 10px;
		font-size: 2rem;
		font-family: ${fonts.secondary};
		color: ${colors.accent};
		bottom: 4px;
		position: relative;
	}

	&:after {
		content: "";
		width: 100%;
		display: block;
		height: 1px;
		background: ${colors.slate};
		margin-left: 20px;
		top: -4px;
		position: relative;
		opacity: .5;
	}
`

const About = () => (
	<Section id='about' >
		<Grid templateColumns='1fr 2fr' columnGap='50px' >
			<p></p>
			<div>
				<TextContainer>
					<Heading>
						About
					</Heading>
					<p>
						Hello! I'm Brittany, a software engineer based in Boston, MA.
					</p>
					<p>
						I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
					</p>
						Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
					<p>
						Here are a few technologies I've been working with recently:
					</p>
				</TextContainer>
			</div>
		</Grid>
	</Section>
)

export default About;