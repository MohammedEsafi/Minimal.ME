import React from 'react';
import styled from 'styled-components';
import { Grid } from '../styles';
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: -4px 9px 25px -6px rgba(234, 13, 13, 0.6);
`

const Image = styled(Img)`
	width: 50px;
	height: 50px;
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
		<Grid templateColumns='1fr 1fr 1fr 1fr 1fr' templateRows='150px' gap='20px' >
			{data.allFile.edges.map(({ node }) => (
				<Item>
					<Image fluid={node.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
				</Item>
			))}
		</Grid>
	)
}

export default Skills;