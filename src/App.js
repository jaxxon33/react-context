import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'

const key = '6e3fa18eda8b5a5ed63360fc1fa92811'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container"></div>
          <Switch>
            <Route exact path="/" component={Index}></Route>
        </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
