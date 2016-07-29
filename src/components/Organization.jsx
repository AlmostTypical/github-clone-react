const React = require('react');
const axios = require('axios');

const NavLink = require('./NavLink');

const Navbar = require('./Navbar');
const Header = require('./Header');
const Repos = require('./Repos');
const People = require('./People');

var Organization = React.createClass({
  render: function () {
    return (
      <div >
        <Navbar />
        <Header />
        <div className="container">
          <ul>
            <li><NavLink to='/repos'>Repositories</NavLink></li>
            <li><NavLink to='/people'>People</NavLink></li>
          </ul>
        </div>

        {this.props.children}
      </div>
    );
  }
});

module.exports = Organization;
