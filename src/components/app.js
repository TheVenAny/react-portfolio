import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>STEVEN ESTEBAN </h1>
        <div>{moment().format("LLLL")}</div>
      </div>
    );
  }
}
