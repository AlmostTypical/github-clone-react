const React = require('react');

const Member = function (props) {
  return (
      <tr>
        <td>
          <figure className="image is-48x48">
            <img src={props.profileImage}/>
          </figure>
          {props.name}
        </td>
        <td> </td>
        <td> </td>
        <td>{props.orgRole}</td>
      </tr>
  )
};

module.exports = Member;