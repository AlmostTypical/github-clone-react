const React = require('react');
const Navbar = require('./Navbar');

var Profile = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
        {this.props.params.username}
      </div>
    );
  }
});

module.exports = Profile;
