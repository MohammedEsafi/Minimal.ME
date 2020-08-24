import React from 'react';
import { css } from 'styled-components';
import { Section, Flex } from '../styles';
import { Title } from '../components';

const addCSS = css`
	p {
		text-align: center;
	}
`

const Contact = ({ data }) => {
	const { frontmatter, html } = data[0].node;

	return (
		<Section>
			<Flex flexDirection='column' >
				<Title align='center' title={frontmatter.shownTitle} ariaLabel={frontmatter.title} />
				<Flex flexDirection='column' addCSS={addCSS} dangerouslySetInnerHTML={{ __html: html }} />
			</Flex>
		</Section>
	)
}

export default Contact;