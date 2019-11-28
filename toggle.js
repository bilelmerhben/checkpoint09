import React from 'react';

export default class ButtonChild extends React.Component {
    
    render() {
      return (
        <div  className={ this.props.className }  onClick={ this.props.toggleClassName }>
          { this.props.children }
        </ div>
      )    
    }
  }