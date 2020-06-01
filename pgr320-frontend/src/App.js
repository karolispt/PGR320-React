import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import AddGrocery from './components/AddGrocery';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Route path="/about" component={About} />
        <Route exact path="/" component={AddGrocery} />
      </React.Fragment>
    );
  }
}

export default App;
