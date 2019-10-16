import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Root, Header, Nav, Content, Footer } from './';
import Button from '@material-ui/core/Button';

const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'temporary',
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
    xs: true,
    sm: true,
    md: true
  },
  footerShrink: {
    xs: false,
    sm: false,
    md: false
  }
};

const useStyles = makeStyles(theme => ({
  buttonLink: {
    margin: theme.spacing(1, 1.5)
  },
  toolbarTitle: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const footers = [
  {
    title: 'Empresa',
    description: ['Contatos', 'Localizações']
  },
  {
    title: 'Novidades',
    description: ['Benefícios', 'Outros']
  },
  {
    title: 'Termos',
    description: ['Privacidade', 'Termos de uso']
  }
];

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    // margin: theme.spacing(0.5),
    border: 'none',
    // padding: theme.spacing(0, 1),
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const varLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Layout = ({ children }) => {
  const [menu, setMenu] = React.useState('home');

  const handleMenu = (event, newMenu) => {
    setMenu(newMenu);
  };
  const classes = useStyles();

  return (
    <Root config={config} style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Header
        menuIcon={{
          inactive: <MenuIcon />,
          active: <ChevronLeftIcon />
        }}
      >
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          *2:1*
        </Typography>
        <Box display={{ xs: 'none', sm: 'block', md: 'block' }}>
          <StyledToggleButtonGroup
            size="large"
            value={menu}
            exclusive
            onChange={handleMenu}
            aria-label="text alignment"
          >
            <ToggleButton value="home" className={classes.toggleButton}>
              Home
            </ToggleButton>
            <ToggleButton value="sobre" className={classes.toggleButton}>
              Sobre nós
            </ToggleButton>
            <ToggleButton value="beneficios" className={classes.toggleButton}>
              Benefícios
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          component={varLink}
          to="app/login"
        >
          Login
        </Button>
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
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          component={varLink}
          to="app/login"
        >
          Login
        </Button>
      </Nav>
      <Content>
        {typeof children === 'function' ? children() : children}
      </Content>

      <Footer>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Footer>
    </Root>
  );
};

export default Layout;
