const React = require('react');
const axios = require('axios');
const moment = require('moment');

var ProfileMember = React.createClass({
  getInitialState: function () {
    return {
      data: []
    }
  },
  componentDidMount: function () {
    this.getOrganizations();
  },
  getOrganizations: function () {
    let url = 'https://api.github.com/users/' + this.props.username + '/orgs';
    axios.get(url)
      .then(function (response) {
        let organizations = response.data;
        this.setState({data: organizations})
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },
  render: function () {
    let orgNodes = this.state.data.map(function (organization, index) {
      return (
        <figure className="image is-64x64" key={index}>
          <a href={organization.url.replace("api.", "")} target="_blank">
            <img src={organization.avatar_url} alt={organization.login} />
          </a>
       </figure>
      )
    });
    return (
      <div className="profile-info">
        <div className="card">
          <div className="card-image">
            <figure className="image is-230x230">
              <img src={this.props.data.avatar_url} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-3">{this.props.data.name}</p>
                <p className="subtitle is-5">{this.props.data.login}</p>
              </div>
            </div>
            <div className="content">
              {this.props.data.bio}
            </div>
            <div className="personal-info">
              <div className="created-at info-item">
                <i className="fa fa-clock-o"></i>
                Joined on {moment(this.props.data.created_at).format("MMM Do YY")}
              </div>
              {
                this.props.data.company
                ? <div className="location info-item">
                    <i className="fa fa-users"></i>
                    {this.props.data.company}
                  </div>
                : null
              }
              {
                this.props.data.location
                ? <div className="location info-item">
                    <i className="fa fa-map-marker"></i>
                    {this.props.data.location}
                  </div>
                : null
              }
              {
                this.props.data.email
                ? <div className="location info-item">
                    <i className="fa fa-envelope"></i>
                    {this.props.data.email}
                  </div>
                : null
              }
            </div>
            <div className="followers-following">
              <a className="level-item">
                {this.props.data.followers}
                <span>Followers</span>
              </a>
              <a className="level-item">
                {this.props.data.following}
                <span>Following</span>
              </a>
              <a className="level-item">
                {this.props.data.following}
                <span>Following</span>
              </a>
            </div>
            <div className="organizations">
              <p className="title is-3">Organizations</p>
              {orgNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileMember;
