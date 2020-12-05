import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
