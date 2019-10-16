import React from 'react';
import Layout from '../components/dashboard/Dashboard';
import ThemeCorporation from '../api/themeCorporation';

export default function homePage() {
  return (
    <ThemeCorporation>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Layout></Layout>
    </ThemeCorporation>
  );
}
