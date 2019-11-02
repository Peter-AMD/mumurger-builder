import React from 'react';
import classes from './MenuToggle.css'
const menu = props => (
  <div className={classes.MenuToggle} onClick={props.showSideDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menu;

