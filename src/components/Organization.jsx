const React = require('react');
const axios = require('axios');
const Header = require('./Header');


var Organization = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Header />
      </div>

    );
  }
});

module.exports = Organization;
