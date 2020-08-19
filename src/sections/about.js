import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Section, Flex, External } from '../styles';
import Icons from '../icons';
import { Title } from '../components';

/*<p>Hey <span role='img' aria-label='hey' >👋</span> I'm Mohammed, a software engineer based in Morocco ! <span role='img' aria-label='Morocco' >🇲🇦</span></p>
						<p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
						<p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
						<p>Here are a few technologies I've been working with — 
							<External to='/resume.pdf' rel="nofollow noopener noreferrer" >
								<span>&nbsp;MY RESUME&nbsp;</span>
								<Icons name='external' side='1.4rem' />
							</External>
						</p>*/

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

	return (
		<Section id='about' >
			<Flex flexDirection='column' >
				<Title title={frontmatter.shownTitle} ariaLabel={frontmatter.title} />
				<Flex flexDirection='row' >
					<Flex flexDirection='column' dangerouslySetInnerHTML={{ __html: html }} />
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