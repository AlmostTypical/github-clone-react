const React = require('react');
const axios = require('axios');
const Repo = require('./Repo');

const Repos = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      data: []
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
      }.bind(this))
      .catch(function(error) {
      console.log(error);
    })
  },
  processRepoData: function (repoData) {
    this.setState({data: repoData});
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
        <section className="repos-wrapper">
          <div className="container">
            {repoNodes}
          </div>
        </section>


    )
  }
});

module.exports = Repos;
