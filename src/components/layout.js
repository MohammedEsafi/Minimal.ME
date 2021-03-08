import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SEO, Header, Mode, Indicator, Footer } from '.';
import { GlobalStyles, theme } from '../styles';
import { ThemeProvider } from 'styled-components';
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

  useEffect(() => {
    let year = (new Date()).getFullYear();

    console.log(`All rights are reserved — ${year} — Made with 🖤 by %cMohammed Esafi`, 'font-style: italic');

    console.log('This website was coded using Gatsby, React, GraphQL and hosted on Netlify');

    console.log('Open sourced on: https://github.com/MohammedEsafi/V1');

    console.log('Have a great day! 😘');
  }, [])

  const [mode, toggleMode, mounted] = Mode()

  const themeMode = (mode === 'light' ? light : dark)

  return (
    <div id="root">
      {
        mounted &&
        <ThemeProvider theme={themeMode} >
          <GlobalStyles />
        	<SEO metadata={site.siteMetadata} />
          <Header toggleMode={toggleMode} />
          <Indicator />
      		{children}
          <Footer />
        </ThemeProvider>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
