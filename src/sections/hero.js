import React from 'react';
import styled from 'styled-components';
import { Section, theme } from '../styles';

const { colors } = theme;

const StyledSection = styled(Section)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const Headline = styled.h1`
	position: relative;
	color: ${colors.slate};
	font-size: 12rem;
	margin: 0px;
	line-height: 1.1;
	text-shadow: 2px 0px ${colors.accent};
`

const Description = styled.p`
	font-size: 2rem;
	margin: 0px;
	color: ${colors.slate};
`

const Hero = ({ headline, description }) => (
	<StyledSection>
		<Headline data-text={ headline } >{ headline }</Headline>
		<Description>{ description }</Description>
	</StyledSection>
)

export default Hero;