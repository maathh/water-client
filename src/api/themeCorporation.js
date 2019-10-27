import React from 'react';
import themeDefault from '../components/themeDefault';
import { ThemeProvider } from '@material-ui/styles';

class ApiTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: themeDefault };
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
