import React, { Component } from "react";
import "./App.scss";
import Homepage from "./pages/homepage";
import Createpage from "./pages/createpage";
import { getAllData } from "./api/jsonplaceholder";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    breadcrumbsItems: [
      {
        name: "Users",
        url: "#/users"
      }
    ],
    users: []
  };

  componentDidMount() {
    getAllData().then(data => {
      this.setState({ users: data });
    });
  }

  addUser = user => {
    this.setState(state => ({
      users: state.users.concat([user])
    }));
  };
  removeBread = selectedItem => {
    let currIndex = this.state.breadcrumbsItems.findIndex(
      item => item.name === selectedItem.name
    );

    currIndex = currIndex > 0 ? currIndex : 1;

    this.setState(state => ({
      breadcrumbsItems: state.breadcrumbsItems.slice(0, currIndex)
    }));
  };

  addBreadCrumb = newItem => {
    this.setState(state => ({
      breadcrumbsItems: state.breadcrumbsItems.concat([newItem])
    }));
  };

  removeUser = user => {
    this.setState(state => ({
      users: state.users.filter(us => us.id !== user.id)
    }));
  };
  render() {
    const { breadcrumbsItems, users } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users" />} />
          <Route
            path="/users"
            exact
            render={() => (
              <Homepage
                removeBread={this.removeBread}
                breadcrumbsItems={breadcrumbsItems}
                users={users}
                removeUser={this.removeUser}
              />
            )}
          />

          <Route
            path="/users/new"
            exact
            render={() => (
              <Createpage
                breadcrumbsItems={breadcrumbsItems}
                removeBread={this.removeBread}
                addBreadCrumb={this.addBreadCrumb}
                addUser={this.addUser}
              />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
