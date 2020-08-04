import React from 'react';
import PropTypes from 'prop-types';
import { SEO, Header, Mode, Scroll, Social } from '.';
import GlobalStyle from '../styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

const { colors: { light, dark } } = theme;

const Layout = ({ children }) => {
  const [mode, toggleMode] = Mode()

  const theme = (mode === 'light' ? light : dark)

  return (
    <div id="root">
      <ThemeProvider theme={theme} >
      	<SEO title="Home" />
    		<GlobalStyle />
        <Header toggleMode={toggleMode} />
        <Scroll />
        <Social />
    		{children}
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
