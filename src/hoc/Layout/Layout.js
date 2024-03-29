import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  }

  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true,
    });
  }

  render() {
    return (
      
      <Auxi>
        <Toolbar showSideDrawer={this.sideDrawerOpenHandler}></Toolbar>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxi>
    )
  }


};

export default Layout;