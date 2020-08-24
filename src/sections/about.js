import React, { useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { Section, Flex } from '../styles';
import Icons from '../icons';
import { Title } from '../components';

const contentCSS = css`
	a {
		color: ${({ theme }) => theme.secondary};
		padding: 0;

		&:active, &:focus {
			outline: none;
		}
	}
`

const About = ({ data }) => {
	const { frontmatter, html } = data[0].node;
	
	const contentRef = useCallback(node => {
		if (node !== null)
		{
			let links = node.getElementsByTagName('a');
			for (let item of links)
				item.innerHTML += ' ' + ReactDOMServer.renderToString(<Icons name='external' side='1.4rem' />);
		}
	}, [])

	return (
		<Section id='about' >
			<Flex flexDirection='column' >
				<Title title={frontmatter.shownTitle} ariaLabel={frontmatter.title} />
				<Flex flexDirection='row' >
					<Flex ref={contentRef} flexDirection='column' addCSS={contentCSS} dangerouslySetInnerHTML={{ __html: html }} />
				</Flex>
			</Flex>
		</Section>
	)
}

About.propTypes = {
	data: PropTypes.array.isRequired,
}

export default About;