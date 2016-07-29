const React = require('react');
const ReactDOM = require('react-dom');

const {Router, Route, IndexRoute, hashHistory} = require('react-router');

const Navbar = require('./components/Navbar');
const Organization = require('./components/Organization');
const Repos = require('./components/Repos');
const People = require('./components/People');

// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Navbar />
//         <Organization />
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Organization}>
      <IndexRoute component={Repos} />
      <Route path='/repos' component={Repos} />
      <Route path='/people' component={People} />
    </Route>
  </Router>
  , document.getElementById('app'));
