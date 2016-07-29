var React = require('react');
const Link = require('react-router').Link;

const Person = function (props) {
  return (
    <div className="peopleImage">
      <figure className="image is-48x48">
      <Link to={"/users/" + props.name}>
        <img src={props.image} />
      </Link>
        </figure>
    </div>
  )
};

module.exports = Person;