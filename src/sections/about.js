import React, { useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const addCSS = css`
	height: 100px;
	opacity: 0.4;
	margin: 50px 0;

	span:first-child {
		background: linear-gradient(${({ theme }) => theme.surface}, ${({ theme }) => theme.primary});
    width: 1px;
    flex: 1;
	}

	span:last-child {
		background: transparent;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    box-shadow: 0 0 0 1.5px ${({ theme }) => theme.primary} inset;
   }
`

const textCenter = {
	textAlign: 'center',
}

const List = styled.ul`
	--foreground: ${({ theme }) => theme.primary};
	--background: ${({ theme }) => theme.surface};
	display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
	flex-wrap: wrap;
	justify-content: center;

	li {
		margin: 1.8rem;
    min-width: 34px;
    display: flex;
    justify-content: center;

		svg {
			height: 34px;
		}
	}
`

const Item = ({ relativePath,  ...props }) => {
  const svg = require(`!raw-loader!../images/${relativePath}`).default;

  return <li {...props} dangerouslySetInnerHTML={{ __html: svg }}/>;
};

const About = ({ data, skills }) => {
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
			<Flex flexDirection='column' alignItems='center' addCSS={addCSS} >
				{[...Array(2)].map((value, index) => (
					<span key={index} ></span>
				))}
			</Flex>
			<Flex flexDirection='column'>
				<p style={textCenter} >Here are a few technologies I've been working with recently</p>
				<List>
					{skills && skills.map(({ node }, index) => (
						<Item key={index} relativePath={node.relativePath} />
					))}
				</List>
			</Flex>
		</Section>
	)
}

About.propTypes = {
	data: PropTypes.array.isRequired,
	skills: PropTypes.array.isRequired,
}

export default About;