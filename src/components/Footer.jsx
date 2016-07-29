const React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <div className="footer-wrapper">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <p className="nav-item" href="#">
                &copy; 2016 GitHub, Inc
              </p>
              <a className="nav-item" href="#">
                Terms
              </a>
              <a className="nav-item" href="#">
                Privay
              </a>
              <a className="nav-item" href="#">
                Security
              </a>
              <a className="nav-item" href="#">
                Status
              </a>
              <a className="nav-item" href="#">
                Help
              </a>
            </div>

            <div className="nav-center">
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
            </div>

            <div className="nav-right nav-menu">
              <a className="nav-item" href="#">
                Contact GitHub
              </a>
              <a className="nav-item" href="#">
                API
              </a>
              <a className="nav-item" href="#">
                Training
              </a>
              <a className="nav-item" href="#">
                Shop
              </a>
              <a className="nav-item" href="#">
                Blog
              </a>
              <a className="nav-item" href="#">
                About
              </a>
            </div>
          </nav>
        </div>
      </div>


    );
  }
});

module.exports = Footer;
