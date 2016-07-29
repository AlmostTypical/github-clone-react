const React = require('react');
const axios = require('axios');
const Person = require('./Person');
const Link = require('react-router').Link;


const PeopleBox = React.createClass({
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
  },
  render: function () {
    let peopleNodes = this.state.data.map(function (person, index) {
      return <Person
        key={index}
        name={person.login}
        image={person.avatar_url}
        url={person.html_url}
      />
    });
    return (
      <div className="card peopleCard">
        <div className="people-card-header">
          <Link to="/People">
            <p className="title is-4">People</p>
            <p className="media-right">15 ></p>
          </Link>
        </div>
        {peopleNodes}
        </div>
    )
  }
});

module.exports = PeopleBox;
