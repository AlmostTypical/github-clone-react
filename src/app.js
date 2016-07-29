const React = require('react');
const ReactDOM = require('react-dom');

const {Router, Route, IndexRoute, hashHistory} = require('react-router');

const Navbar = require('./components/Navbar');
const Organization = require('./components/Organization');
const Repos = require('./components/Repos');
const People = require('./components/People');
const Profile = require('./components/Profile');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Organization}>
      <IndexRoute component={Repos} />
      <Route path='/people' component={People} />
    </Route>
    <Route path='/users/:username' component={Profile} />
  </Router>
  , document.getElementById('app'));
