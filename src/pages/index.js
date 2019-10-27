import React from 'react';
import Layout from '../components/template/Layout';
import ThemeCorporation from '../api/themeCorporation';
import Cadastro from './Cadastro';
import Login from './Login';


const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'persistent',
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

export default function homePage() {
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user || !user.displayName) {
    user = {
      email: "",
      photoURL: "",
      displayName: "",
      token: "",
    }
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  return (
    <ThemeCorporation>
      <Layout config={config}>
        <Login />
      </Layout>
    </ThemeCorporation>
  );
}
