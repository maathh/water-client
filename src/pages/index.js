import React from 'react';
import Layout from '../components/template/Layout';
import ThemeCorporation from '../api/themeCorporation';
// import Button from '@material-ui/core/Button';

export default function homePage() {
  return (
    <ThemeCorporation>
      <Layout>
      </Layout>
    </ThemeCorporation>
  );
}
