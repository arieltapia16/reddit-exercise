import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  }
}

export default App;