import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs />
        <Grid item>
          <Tooltip title="Informação">
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Alerta • Sem alteração">
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <IconButton color="inherit" className={classes.iconButtonAvatar}>
            <Avatar src="" alt="My Avatar" />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Content);
