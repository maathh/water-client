import React, { useLayoutEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '../components/Dialog';
import LoginGoogle from '../components/LoginGoogle';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const isXsFunction = () => window.innerWidth <= 600;

function useWindowSize() {
  const [isXs2, setIsXs2] = useState(isXsFunction());
  useLayoutEffect(() => {
    function updateSize() {
      setIsXs2(isXsFunction())
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return isXs2;
}


export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const isXs = useWindowSize();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullScreen={isXs} open={open} handlerClose={handleClose}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logar
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-se de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
          </Button>


            <LoginGoogle />


            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
              </Link>
              </Grid> */}
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {'Não possui uma conta? Cadastre-se'}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
        <br />
      </Container>
    </Dialog>
  );
}
