import React from 'react';
import { Layout } from '../components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Main } from '../styles';
import { Hero, About, Projects } from '../sections';

const IndexPage = ({ data }) => (
	<Layout>
		<Main>
			<Hero data={data.hero.edges} />
			<About data={data.about.edges} skills={data.skills.edges} />
			<Projects />
		</Main>
	</Layout>
)

IndexPage.propTypes = {
	data: PropTypes.object.isRequired,
}

export default IndexPage;

export const pageQuery = graphql`
	{
		hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
	    edges {
	    	node {
	    		frontmatter {
			      headline
			    }
			    html
	    	}
	    }
	  }
	  about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
	    edges {
	    	node {
	    		frontmatter {
			      title
			      shownTitle
			    }
			    html
	    	}
	    }
	  }
	  skills: allFile(filter: {absolutePath: {regex: "/skills/"}}, sort: {fields: name, order: ASC}) {
	    edges {
	      node {
	        name
	        relativePath
	      }
	    }
	  }
	}
`

