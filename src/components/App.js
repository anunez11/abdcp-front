import React, { Component } from 'react';

import Conten from './global/Conten'
import PropTypes from 'prop-types';
import '../App.css';

class App extends Component {
  static propTypes ={
    children:PropTypes.object.isRequired
  }
  render() {
    const {children}=this.props;
    return (
      <div className="App">
          <Conten body={children} /> 
      </div>
    );
  }
}

export default App;
