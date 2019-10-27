import React, { useLayoutEffect, useState } from 'react';
import Dialog from '../components/Dialog';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(3)
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

const responseGoogle = (response) => {
  console.log(response);
}

function Cadastro() {

  const [open, setOpen] = useState(true);
  const isXs = useWindowSize();

  const [nome, setNome] = useState('');
  const [segundoNome, setSegundoNome] = useState('');
  // const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  // const salvarUsuario = () => {
  //   setOpen(false);
  // };

  const classes = useStyles();
  return (
    <Dialog fullScreen={isXs} open={open} handlerClose={handleClose}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="nome"
                  variant="outlined"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                  value={nome} 
                  onChange={(e)=>{setNome(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="segundoNome"
                  label="Segundo Nome"
                  name="segundoNome"
                  autoComplete="lname"
                  value={segundoNome} 
                  onChange={(e)=>{setSegundoNome(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email} 
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="senha"
                  label="senha"
                  type="password"
                  id="senha"
                  autoComplete="current-password"
                  value={senha} 
                  onChange={(e)=>{setSenha(e.target.value)}}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Desejo receber novidades e promocões via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Confirmar
              </Button>
            <GoogleLogin
              clientId="501185569169-1fc83tfjqu4hdc285epdsanvppv2hnqf.apps.googleusercontent.com"
              buttonText="Login"
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  fullWidth
                  color="primary"
                  variant="outlined"
                >
                  <div style={{
                    marginRight: "10px",
                    background: "rgb(255, 255, 255)",
                    padding: "5px",
                    borderRadius: "2px",
                    height: "29px"
                  }}>
                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#000" fillRule="evenodd">
                        <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path>
                        <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path>
                        <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path>
                        <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path>
                        <path fill="none" d="M0 0h18v18H0z"></path>
                      </g>
                    </svg>
                  </div>
                  <span style={{ fontWeight: 500 }}>Login com o Google</span>
                </Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            /> 
            <GoogleLogout
              clientId="501185569169-1fc83tfjqu4hdc285epdsanvppv2hnqf.apps.googleusercontent.com"
              buttonText="Logout"
            // onLogoutSuccess={logout}
            >
            </GoogleLogout>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Já possui uma conta? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Dialog>
  );
}

export default Cadastro;
