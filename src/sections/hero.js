import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Section, media } from '../styles';

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
	font-size: 15rem;
	text-transform: uppercase;
	line-height: 1.4;
	margin: 0;

	${media.tablet`
		font-size: 11.5rem;
	`};
	
	${media.phone`
		font-size: 11rem;
	`};
`

const Description = styled.div`
	p {
		margin: 0;
		text-align: center;
	}
`

const Hero = ({ data }) => {
	const { frontmatter, html } = data[0].node;

	return (
		<Container>
			<Headline>{ frontmatter.headline }</Headline>
			<Description dangerouslySetInnerHTML={{ __html: html }} />
		</Container>
	)
}

Hero.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Hero;