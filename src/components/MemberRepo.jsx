const React = require('react');
const moment = require('moment');

const MemberRepo = function (props) {
  return (
    <div className="repo">
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
              <span className="repoBlock">{moment(props.dateUpdated).format("MMM Do YY")}</span>
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

module.exports = MemberRepo;