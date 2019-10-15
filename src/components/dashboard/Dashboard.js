import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer } from '../template';
import NavContent from './Nav';
import ContentDashboard from './Content';
import HeaderContent from './Header';

const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
    md: 'permanent'
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
    xs: false,
    sm: false,
    md: true
  },
  footerShrink: {
    xs: false,
    sm: false,
    md: true
  }
};

const App = props => {
  return (
    <Root config={config} style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Header
        menuIcon={{
          inactive: <MenuIcon />,
          active: <ChevronLeftIcon />
        }}
      >
        <HeaderContent />
      </Header>
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
      >
        <NavContent />
      </Nav>

      <Content>
        <br />
        <ContentDashboard />
      </Content>

      <Footer>
        {/* footer goes here */}
        <div></div>
      </Footer>
    </Root>
  );
};
export default App;
