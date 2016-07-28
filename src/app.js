const React = require('react');
const ReactDOM = require('react-dom');

const Navbar = require('./components/Navbar');


const App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
