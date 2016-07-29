const React = require('react');
const Link = require('react-router').Link;

const NavLink = function (props) {
  return (
    <Link to={props.to} activeClassName="active">{props.children}</Link>
  )
}

module.exports = NavLink;
