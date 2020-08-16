import React from 'react';
import { Layout } from '../components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Main } from '../styles';
import { Hero, About } from '../sections';

const IndexPage = ({ data }) => (
	<Layout>
		<Main>
			<Hero data={data.hero.edges} />
			<About data={data.about.edges} />
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
	}
`

