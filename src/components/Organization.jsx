const React = require('react');
const axios = require('axios');
const Header = require('./Header');
const Repos = require('./Repos');


var Organization = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Header />
        <Repos />
      </div>
    );
  }
});

module.exports = Organization;
