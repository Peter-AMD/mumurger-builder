import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeModal}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100)',
          opacity: props.show ? '1' : '0',
          zIndex: props.show ? '101' : '-1',
        }}>
        {props.children}
      </div >
    </Aux>
  )
}

export default modal;