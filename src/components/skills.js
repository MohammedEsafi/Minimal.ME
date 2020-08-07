import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '../styles';
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';
import { hex2rgba } from '../utils';

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: -4px 9px 25px -6px ${({ theme }) => hex2rgba(theme.primary, 0.2)};
`

const Image = styled(Img)`
	width: 50px;
	height: 50px;
`

const addCSS = css`
	padding-top: 4rem;
`

const Skills = () => {
	const data = useStaticQuery(graphql`
		query {
		  allFile(filter: {relativeDirectory: {eq: "skills"}}, sort: {fields: base}) {
		    edges {
		      node {
		        base
		        childImageSharp {
		          fluid {
		            base64
		            tracedSVG
		            srcWebp
		            srcSetWebp
		            originalImg
		            originalName
		          }
		        }
		      }
		    }
		  }
		}
	`)

	return (
		<Grid templateColumns='1fr 1fr 1fr 1fr 1fr' templateRows='150px' gap='20px' addCSS={addCSS} >
			{data.allFile.edges.map(({ node }, index) => (
				<Item key={index} >
					<Image fluid={node.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
				</Item>
			))}
		</Grid>
	)
}

export default Skills;