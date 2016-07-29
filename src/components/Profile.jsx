const React = require('react');
const Navbar = require('./Navbar');
const axios = require('axios');

var Profile = React.createClass({
  getInitialState: function () {
    return {
      data: []
    }
  },
  componentDidMount: function () {
    this.getMemberData()
  },
  getMemberData: function () {
    let url = 'https://northcoders-github-api.herokuapp.com/api/users/' + this.props.params.username;
    axios.get(url)
      .then(function (response){
        let memberData = response.data;
        this.processMemberData(memberData)
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  },
  processMemberData: function (memberData) {
    this.setState({data: memberData});
    console.log(this.state.data)
  },
  render: function () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <span>
          {this.state.data.login}
          </span>
          <span>
          <img src={this.state.data.avatar_url}/>
            </span>
          <span>
            {this.state.data.company}
            </span>
          <span>
          {this.state.data.blog}
          </span>
          <span>
          {this.state.data.location}
          </span>
          <span>
          {this.state.data.created_at}
          </span>
          <span>
          {this.state.data.followers}
          </span>
          <span>
          {this.state.data.following}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
