import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { Label } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState() {
    return {}
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="Tags">
          <h2 className="TagItem"><Label bsStyle="danger">Node</Label></h2>
          <h2 className="TagItem"><Label bsStyle="primary">React</Label></h2>
          <h2 className="TagItem"><Label bsStyle="info">ReactBootstrap</Label></h2>
          <h2 className="TagItem"><Label bsStyle="danger">Sass</Label></h2>
        </div>
      </div>
    );
  }
}

export default App;
