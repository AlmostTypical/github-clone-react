const React = require('react');
const axios = require('axios');
const IndexLink = require('react-router').IndexLink;
const NavLink = require('./NavLink');

const Navbar = require('./Navbar');
const Header = require('./Header');
const Repos = require('./Repos');
const People = require('./People');
const Footer = require('./Footer');

var Organization = React.createClass({
  render: function () {
    return (
      <div className="app-wrapper">
        <Navbar />
        <Header />
        <div className="tabs-wrapper">
          <div className="container">
            <div className="tabs">
              <ul>
                <li className="tab-nav"><IndexLink to='/' activeClassName="active">Repositories</IndexLink></li>
                <li className="tab-nav"><NavLink to='/people'>People</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Organization;
