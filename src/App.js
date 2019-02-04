import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'

import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container"></div>
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
