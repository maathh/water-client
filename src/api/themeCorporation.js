import React from 'react';
import CancelablePromise from './CancelablePromise';
import themeDefault from '../components/themeDefault';
import { ThemeProvider } from '@material-ui/styles';

class ApiTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: themeDefault };
  }

  componentDidMount() {
    this.fetchData = new CancelablePromise(fetch('/api/themeCorporation'));
    this.fetchData.promise
      .then(response => {
        return response.json().then(obj => {
          const theme = this.state;

          if (obj.primary && obj.secondary) {
            theme.palette.primary.main = obj.primary;
            theme.palette.secondary.main = obj.secondary;

            this.setState(() => {
              return {
                theme: theme
              };
            });
          }
        });
      })
      .catch(error => {
        if (this.fetchData.hasCanceled) return;
      });
  }

  componentWillUnmount() {
    this.fetchData.cancel();
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default ApiTheme;
