import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme, Section, media } from '../styles';

const { fonts } = theme;

const Container = styled(Section)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	osition: relative;
`

const Headline = styled.h1`
	position: relative;
	font-size: 12rem;
	line-height: 1.1;
	margin: 0;
	font-family: ${fonts.secondary};

	${media.tablet`
		font-size: 10rem;
	`};
	
	${media.phone`
		font-size: 8rem;
	`};
`

const Description = styled.p`
	margin: 0;
	text-align: center;
`

const Hero = ({ headline, description }) => (
	<Container>
		<Headline>{ headline }</Headline>
		<Description dangerouslySetInnerHTML={{ __html: description }} />
	</Container>
)

Hero.propTypes = {
	headline: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default Hero;