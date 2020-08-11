import React from 'react';
import PropTypes from 'prop-types';
import { SEO, Header, Mode, Social, Indicator, Footer } from '.';
import GlobalStyle from '../styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';
import { useStaticQuery, graphql } from 'gatsby';

const { colors: { light, dark } } = theme;

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const [mode, toggleMode, mounted] = Mode()

  const themeMode = (mode === 'light' ? light : dark)

  return (
    mounted &&
    <div id="root">
      <ThemeProvider theme={themeMode} >
      	<SEO metadata={site.siteMetadata} />
    		<GlobalStyle />
        <Header toggleMode={toggleMode} />
        <Social />
        <Indicator />
    		{children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
