import React, { Component } from "react";

import { Link } from "react-router-dom";

import imgSearch from "../assets/searcher.svg";
import imgCycling from "../assets/puzzle.svg";
import imgAdvanced from "../assets/trophy.svg";
import imgRoute from "../assets/directions.svg";
import escapeRegExp from 'escape-string-regexp'
import TableUsers from "../components/tableusers";
import ActionModal from "../components/actionmodal";
import BreadCrumbs from "../components/breadcrumbs";

class Homepage extends Component {
  state = {
    selectedUser: null,
    query: '',
  };
  setModal = user => {
    this.setState({ selectedUser: user });
  };
  handleSearch = query => {
    this.setState({
      query: query.trim()
    })
  }
  removeUser = user => {
    this.setState({
      query: ''
    })
    this.props.removeUser(user);
  }
  render() {
    let filterUsers;

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filterUsers = this.props.users.filter(c => match.test(c.username));
    } else {
      filterUsers = this.props.users;
    }
    return (
      <div className="homepage">
        <div className="container">
          <h1>Venturus Sport</h1>
        </div>
        <BreadCrumbs
          removeBread={this.props.removeBread}
          breadcrumbsItems={this.props.breadcrumbsItems}
        />
        <div className="homepage-heading">
          <div className="homepage-heading-holder container">
            <div className="item">
              <img src={imgCycling} className="icon" alt="ico-item-cycling" />
              <div className="content">
                <p>Sport type</p>
                <h2>Cycling</h2>
              </div>
            </div>

            <div className="item">
              <img src={imgAdvanced} className="icon" alt="ico-item-advanced" />
              <div className="content">
                <p>Mode</p>
                <h2>Advanced</h2>
              </div>
            </div>

            <div className="item">
              <img src={imgRoute} className="icon" alt="ico-item-route" />
              <div className="content">
                <p>Route</p>
                <h2>30 miles</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <header className="page-title">
            <h3 className="title">Users</h3>
            <label className="table-filter-holder">
              <img src={imgSearch} className="search-icon" alt="Search" />
              <input
                className="table-filter"
                placeholder="Filter table content by username"
                value={this.state.query}
                onChange={evt => this.handleSearch(evt.target.value)}
              />
            </label>
          </header>
        </div>

        <div className="container">
          <TableUsers users={filterUsers} setModal={this.setModal} />
          <Link className="linkButton addRow" to="/users/new">
            Add new user
          </Link>
        </div>
        {this.state.selectedUser !== null && (
          <ActionModal
            removeUser={this.removeUser}
            selectedUser={this.state.selectedUser}
            setModal={this.setModal}
          />
        )}
      </div>
    );
  }
}

export default Homepage;
