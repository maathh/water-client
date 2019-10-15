import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer } from './';

const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'temporary',
    md: 'persistent'
  },
  navWidth: {
    xs: 240,
    sm: 256,
    md: 256
  },
  collapsible: {
    xs: false,
    sm: false,
    md: false
  },
  collapsedWidth: {
    xs: 64,
    sm: 64,
    md: 64
  },
  clipped: {
    xs: false,
    sm: false,
    md: false
  },
  headerPosition: {
    xs: 'relative',
    sm: 'relative',
    md: 'sticky'
  },
  squeezed: {
    xs: true,
    sm: true,
    md: true
  },
  footerShrink: {
    xs: false,
    sm: false,
    md: false
  }
};

const Layout = () => {
  return (
    <Root config={config} style={{ minHeight: '100vh' }}>
      <CssBaseline />

      <Header
        menuIcon={{
          inactive: <MenuIcon />,
          active: <ChevronLeftIcon />
        }}
      ></Header>

      <Nav
        collapsedIcon={{
          inactive: <ChevronLeftIcon />,
          active: <ChevronRightIcon />
        }}
        header={
          // you can provide fixed header inside nav
          // change null to some react element
          ctx => null
        }
      ></Nav>

      <Content></Content>

      <Footer></Footer>
    </Root>
  );
};

export default Layout;
