const React = require('react');
const ReactDOM = require('react-dom');

const Navbar = require('./components/Navbar');
const Organization = require('./components/Organization');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
        <Organization />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
