import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.closeModal}></Backdrop>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
            opacity: this.props.show ? '1' : '0',
            zIndex: this.props.show ? '101' : '-1',
          }}>
          {this.props.children}
        </div >
      </Aux>
    )
  }
}

export default Modal;