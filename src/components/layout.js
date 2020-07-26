import React from 'react';
import PropTypes from 'prop-types';
import { SEO, Navigation, Social, Scroll } from '.';
import { Global as GlobalStyle } from '../styles';

const Layout = ({ children }) => {
  return (
    <div id="root">
    	<SEO title="Home" />
  		<GlobalStyle />
  		<Navigation />
      <Social />
      <Scroll />
  		{children}
  		<footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
