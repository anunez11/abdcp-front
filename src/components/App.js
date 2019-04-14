import React, { Component } from 'react';

import Conten from './global/Conten';
import Header from './global/Header';
import Footer from './global/Footer';

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
          <Header/>
          <Conten body={children} /> 
           <Footer />
      </div>
    );
  }
}

export default App;
