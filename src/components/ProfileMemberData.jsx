const React = require('react');
const MemberRepo = require('./MemberRepo');
const axios = require('axios');

var ProfileMemberData = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      data: []
    }
  },
  componentDidMount: function () {
    this.getMemberRepoData()
  },
  getMemberRepoData: function () {
    let url = 'https://northcoders-github-api.herokuapp.com/api/users/' + this.props.user + '/repos';
    axios.get(url)
      .then(function (response){
        let memberRepoData = response.data;
        this.processMemberRepoData(memberRepoData);
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  },
  processMemberRepoData: function (memberRepoData) {
    this.setState({data: memberRepoData});
  },
  render: function () {
    var memberRepoNodes = this.state.data.map(function (repo, index) {
      return <MemberRepo
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
           {memberRepoNodes}
        </div>
      </section>
    );
  }
});

module.exports = ProfileMemberData;
