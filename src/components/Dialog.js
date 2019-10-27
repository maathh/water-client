import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

function Title(props) {
  const title = props.children;
  if (title) {
    return <DialogTitle id="form-dialog-title">{title}</DialogTitle>;
  }
  return null;
}

class DialogDefault extends React.Component {
  render() {
    return (
      <Dialog
        fullScreen={this.props.fullScreen}
        open={this.props.open}
        onClose={this.props.handlerClose}
        aria-labelledby="form-dialog-title"
      >
        <Title>{this.props.title}</Title>
        <DialogContent>
          {this.props.children}
        </DialogContent>
        <DialogActions>{this.props.actions}</DialogActions>
      </Dialog>
    );
  }
}

DialogDefault.propTypes = {
  fullScreen: PropTypes.bool,
  open: PropTypes.bool,
  handlerClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
  actions: PropTypes.element
};
DialogDefault.defaultProps = {
  fullScreen: false,
  open: false,
  handlerClose: () => {},
  title: '',
  children: '',
  actions: <div></div>
};

export default DialogDefault;
