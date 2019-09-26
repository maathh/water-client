import React, {Component} from 'react';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {AppBar, Toolbar, Typography} from "@material-ui";
import {createMuiTheme} from '@material-ui/styles';
import red from '@material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                My Awesome React App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;