import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from 'reactstrap';

import View from './components/View'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron id="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <hr className="my-2" />
          <View/>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
