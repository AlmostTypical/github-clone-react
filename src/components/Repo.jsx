const React = require('react');
const relativeDate = require('relative-date');

const Repo = function (props) {
 console.log(props.dateUpdated);
  return (
    <div>
      <article className="media">
        <div className="media-left">
          <div className="media-content">
            <div className="content">
              <span className="repoBlock">
                <a href={props.repoUrl} target="_blank"><strong>{props.name}</strong></a>
              </span>
              <br />
              <span className="repoBlock">{props.description}</span>
              <br />
              <span className="repoBlock">{props.dateUpdated}</span>
            </div>
          </div>
        </div>
        <div className="media-right">
          <span className="fa fa-code-fork"></span>
          <span className="fa fa-star"></span>
        </div>
      </article>
    </div>
  )
};

module.exports = Repo;