var React = require('react');
const axios = require('axios');
const Member = require('./Member');

var People = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      data: []
    }
  },
  componentDidMount: function () {
    this.getPeopleData()
  },
  getPeopleData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders/members')
      .then(function (response){
        let peopleData = response.data;
        this.processPeopleData(peopleData);
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  },
  processPeopleData: function (peopleData) {
    this.setState({data: peopleData});
    console.log(peopleData);

  },
  render: function () {
    var memberNodes = this.state.data.map(function (member, index) {
      return <Member
        key={index}
        name={member.login}
        profileImage={member.avatar_url}
        orgRole={member.type}
      />
    });
    return (
      <div className="container">
        <section className="people-wrapper">
          <div className="container">
            <table className="table">
              <thead>
              <tr>
                <th>15 people in the Northcoders organisation</th>
                <th> </th>
                <th> </th>
                <th>Filter by organisation role</th>
                </tr>
              </thead>
              <tbody>
                {memberNodes}
              </tbody>
            </table>
          </div>
        </section>
      </div>

    );
  }
});

module.exports = People;
