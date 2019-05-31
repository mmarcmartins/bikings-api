import React, { Component } from "react";
import "../../App.scss";
import imgTrash from "../../assets/garbage.svg";
class TableUsers extends Component {
  render() {
    const { setModal } = this.props;
    const users = this.props.users || [];
    return (
      <div className="table-container">
        <table className="table-users">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Posts</th>
              <th>Albums</th>
              <th>Photos</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.ride}</td>
                <td>{user.days.join(", ")}</td>
                <td>{user.posts}</td>
                <td>{user.albums}</td>
                <td>{user.photos}</td>
                <td onClick={() => setModal(user)}>
                  <img src={imgTrash} alt="Delete register" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableUsers;
