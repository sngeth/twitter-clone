import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Follow from './components/Follow';

import { Router, Route, Link, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');

  if(reactNode) {
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path="/" component={Index}/>
          <Route path="/follow" component={Follow}/>
        </Route>
      </Router>
      , reactNode);
  }
};

$(documentReady);
