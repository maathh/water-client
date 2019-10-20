import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';

const categories = [
  {
    id: 'Gerencimento',
    children: [
      { id: 'Monitoramento', icon: <DnsRoundedIcon />, active: true },
      { id: 'Empresas', icon: <BusinessIcon /> }
    ]
  }
  // {
  //   id: 'Qualidade',
  //   children: [
  //     { id: 'Análise', icon: <SettingsIcon /> },
  //     { id: 'Performance', icon: <TimerIcon /> },
  //   ],
  // },
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: theme.palette.third.dark,
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes } = props;

  return (
    <List disablePadding>
      <ListItem
        className={clsx(classes.firebase, classes.item, classes.itemCategory)}
      >
        Waterbase
      </ListItem>
      <ListItem className={clsx(classes.item, classes.itemCategory)}>
        <ListItemIcon className={classes.itemIcon}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemPrimary
          }}
        >
          Home
        </ListItemText>
      </ListItem>
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderPrimary
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon, active }) => (
            <ListItem
              key={childId}
              button
              className={clsx(classes.item, active && classes.itemActiveItem)}
            >
              <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                {childId}
              </ListItemText>
            </ListItem>
          ))}

          <Divider className={classes.divider} />
        </React.Fragment>
      ))}
    </List>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
