import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from './MenuToggle/MenuToggle';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Menu showSideDrawer={props.showSideDrawer}/>
    <div className={classes.Logo}>
        <Logo></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;