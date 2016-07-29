const React = require('react');
const Link = require('react-router').Link;

const Member = function (props) {
  return (
      <tr>
        <td className="username">
          <figure className="image is-48x48">
            <img src={props.profileImage}/>
          </figure>
          <Link to={"/users/" + props.name}>{props.name}</Link>
        </td>
        <td> </td>
        <td> </td>
        <td>{props.orgRole}</td>
      </tr>
  )
};

module.exports = Member;
