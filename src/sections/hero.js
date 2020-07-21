import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Section, Glitch, theme } from '../styles';

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

	&:before,
	&:after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&:before {
		left: -1px;
		background: ${colors.background};
		animation: ${Glitch} 15s infinite linear alternate-reverse;
	}

	&:after {
		left: 1px;
		background: ${colors.background};
		text-shadow: 2px 0 #64FFDA;
		animation: ${Glitch} 2s infinite linear alternate-reverse;
	}
`

const Description = styled.p`
	font-size: 1.6rem;
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