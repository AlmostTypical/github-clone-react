const React = require('react');
const axios = require('axios');
const Repo = require('./Repo');
const relativeDate = require('relative-date');

const Repos = React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    }
  },
  componentDidMount: function () {
    this.getRepoData()
  },
  getRepoData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders/repos')
      .then(function (response){
        let repoData = response.data;
        this.processRepoData(repoData);
      }.bind(this)).catch(function(error) {
      console.log(error);
    })
  },
  processRepoData: function (repoData) {
    this.setState({data: repoData});
  },
  determineDateFormat: function (date) {
    let currentDate = Date.now();
    let updateDate = Date.parse(date);
    if (currentDate - updateDate < 86400000) {
      updateDate = relativeDate(updateDate);
      return updateDate
    } else if (currentDate - updateDate < 31556952000) {
      return date.match(/\w\w\w\W\d+/)[0]
    } else {
      return date.match(/\w\w\w\W\d+/)[0] + ' ' + date.slice(date.length - 4)
    }
  },
  render: function () {
    var repoNodes = this.state.data.map(function (repo, index) {
      return <Repo
        key={index}
        name={repo.name}
        description={repo.description}
        dateUpdated={repo.updated_at}
        language={repo.language}
        stars={repo.stargazers_count}
        privacy={repo.private}
        hasBeenForked={repo.fork}
        repoUrl={repo.html_url}
      />
    });
    return (
      <div className="container">
        {repoNodes}
      </div>
    )
  }
});

module.exports = Repos;