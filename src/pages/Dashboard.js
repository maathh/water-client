import React from 'react';
import Layout from '../components/template/Layout';
import ThemeCorporation from '../api/themeCorporation';
import MonitoramentoLocais from '../components/dashboard/MonitoramentoLocais';
import { useParams } from "react-router-dom";

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

const NavigationOptions = (nav) => {
  switch (nav) {
    case 'monitoramento':
      return <MonitoramentoLocais></MonitoramentoLocais>;
    case 'empresas':
      return null;
    default:
      return <MonitoramentoLocais></MonitoramentoLocais>;
  }
}

export default function Dashboard(props) {
  const { nav } = useParams();

  return (
    <ThemeCorporation>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Layout config={config}>
        {NavigationOptions(nav)}
      </Layout>
    </ThemeCorporation>
  );
}
