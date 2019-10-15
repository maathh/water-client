import React from 'react';
import Layout from '../template/Layout';
import ImageBackground from '../images/apagar.png';
import ThemeCorporation from '../api/themeCorporation';
// import Button from '@material-ui/core/Button';

export default function homePage() {
  return (
    <ThemeCorporation>
      <Layout>
        <div>
          <img
            style={{ width: '100%' }}
            src={ImageBackground}
            alt="BACKGROUND"
          />
        </div>
        {/* <Button variant="outlined" color="secondary" style={{}}>
          Participe!
      </Button> */}
      </Layout>
    </ThemeCorporation>
  );
}
