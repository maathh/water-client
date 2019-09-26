import React, { Component } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import DataTable from './dataTable/dataTable';
import FirebaseService from '../services/firebaseService';

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {
    state = {
        data: []
    };
    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) => this.setState({ data: dataReceived }))
    }
    // state = {
    //     data: [
    //         {
    //             key: 'test key key',
    //             temperatura: 'test key temperatura',
    //             umidade: 'test key umidade',
    //             cliente: 'test key cliente',
    //             data: 'test key data',
    //         }
    //     ]
    // };
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
                    <DataTable data={this.state.data} />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;