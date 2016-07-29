const React = require('react');
const Navbar = require('./Navbar');
const axios = require('axios');
const moment = require('moment');

const ProfileMember = require('./ProfileMember');
const ProfileMemberData = require('./ProfileMemberData');

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
  },
  render: function () {
    return (
      <div>
        <Navbar />
        <div className="container profile-wrapper">
          <div className="columns">
            <div className="column is-one-third">
              <ProfileMember data={this.state.data} username={this.props.params.username}/>
            </div>
            <div className="column is-two-thirds">
              <ProfileMemberData user={this.props.params.username}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
