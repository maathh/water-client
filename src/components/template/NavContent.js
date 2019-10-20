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
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from "react-router-dom";

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
    fontSize: 18,
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
    fontSize: 16,
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

const Link = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Navigator(props) {
  const { classes } = props;
  const { nav } = useParams();
  const categories = [
    {
      id: 'Gerenciamento',
      children: [
        { id: 'Monitoramento', icon: <DnsRoundedIcon />, to: "/dashboard/monitoramento/locais", active: (nav === 'monitoramento' ? true : false) },
        { id: 'Empresas', icon: <BusinessIcon />, to: "/dashboard/empresas/geral", active: (nav === 'empresas' ? true : false) }
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

  return (
    <List disablePadding>
      <ListItem to="/" component={Link}
        className={clsx(classes.firebase, classes.item, classes.itemCategory)}
      >
        Waterbase
      </ListItem>
      <ListItem to="/" component={Link} button className={clsx(classes.item, classes.itemCategory)}>
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
          {children.map(({ id: childId, icon, to, active }) => (
            <ListItem
              key={childId}
              button
              className={clsx(classes.item, active && classes.itemActiveItem)}
              component={Link}
              to={to}
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
