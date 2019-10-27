import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import LocaisTable from './LocaisTable';
import DetalhesTable from './DetalhesTable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useParams } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: '50px auto',
    overflow: 'hidden'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: 'block'
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: '40px 16px'
  }
});

const Link = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Content(props) {
  const { classes } = props;
  const { tab, idbase } = useParams();
  const [numTab, setNumTab] = useState(0);

  switch (tab) {
    case 'detalhes':
      if (numTab !== 1) {
        setNumTab(1);
      }
      break;
    case 'locais':
      if (numTab !== 0) {
        setNumTab(0);
      }
      break;
    case 'geral':
    default:
      if (numTab !== 0) {
        setNumTab(0);
      }
      break;
  }

  const NavigationOptions = (numTab) => {
    switch (numTab) {
      // case 0:
      //   return <LocaisTable />;
      case 1:
        return <DetalhesTable idBase={idbase}/>;
      case 0:
      default:
          return <LocaisTable />;
        // return <p style={{textAlign:"center"}}>Em desenvolvimento</p>;
    }
  }

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Monitoramento
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={numTab} textColor="inherit">
          {/* <Tab to="/dashboard/monitoramento/geral" component={Link} textColor="inherit" label="Geral" /> */}
          <Tab to="/dashboard/monitoramento/locais" component={Link} textColor="inherit" label="Locais" />
          <Tab disabled to="/dashboard/monitoramento/detalhes" component={Link} textColor="inherit" label="Detalhes" />
        </Tabs>
      </AppBar>


      <Paper className={classes.paper}>
        {NavigationOptions(numTab)}
      </Paper>


    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
