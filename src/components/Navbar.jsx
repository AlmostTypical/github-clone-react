var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <p className="nav-item control has-addons">
                <a className="navbar-search button is-info">
                  This Organization
                </a>
                <input className="input" type="text" placeholder="Search" />
              </p>
              <a className="nav-item" href="#">
                Pull requests
              </a>
              <a className="nav-item" href="#">
                Issues
              </a>
              <a className="nav-item" href="#">
                Gist
              </a>
            </div>

            <div className="nav-right nav-menu">
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-bell"></i>
                </span>
              </a>
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-plus"></i>
                </span>
              </a>
              <a className="nav-item" href="#">
                <figure className="image">
                  <img src="http://placehold.it/28x28" />
                </figure>
              </a>

            </div>
          </nav>
        </div>

      </div>
    );
  }
});

module.exports = Navbar;
