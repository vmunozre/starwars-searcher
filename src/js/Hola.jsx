import React, { Component } from 'react';
 
class Hola extends Component {
  render() {
    return (
      <h1>Hola {this.props.name}</h1>
    );
  }
}
 
export default Hola;