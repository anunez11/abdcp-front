import React, { Component } from 'react';

import PropTypes from 'prop-types';
class  Conten extends Component{
    static propTypes ={
        body:PropTypes.object.isRequired
      }
    render(){

        const {body}=this.props;
        return (<div className="container">
              {body} 
        </div>);
    }

}

export default Conten;