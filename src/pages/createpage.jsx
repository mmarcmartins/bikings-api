import React, { Component } from "react";

import imgHeart from "../assets/cardiogram.svg";
import imgFloat from "../assets/life-preserver.svg";
import imgHappy from "../assets/happiness.svg";

import CreateFormUser from "../components/createuserform";
import BreadCrumbs from "../components/breadcrumbs";

class Createpage extends Component {
  state = {
    urlObject: {
      name: "New User",
      url: "/users/new"
    }
  };
  componentDidMount() {
    this.props.addBreadCrumb(this.state.urlObject);
  }
  backBreadcrumbs = () => {
    /* Back to users list  */
    this.props.removeBread(this.props.breadcrumbsItems[0]);
  };
  render() {
    return (
      <div className="createpage">
        <header className="page-title container">
          <h1 className="title">Registration</h1>
        </header>
        <BreadCrumbs
          removeBread={this.props.removeBread}
          breadcrumbsItems={this.props.breadcrumbsItems}
        />
        <div className="hints container">
          <div className="hints-item">
            <h2>Need help ?</h2>
            <div className="hints-content">
              <img className="icon" src={imgFloat} alt="icon-float" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="hints-item">
            <h2>Need help ?</h2>
            <div className="hints-content">
              <img className="icon" src={imgHeart} alt="icon-float" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="hints-item">
            <h2>Need help ?</h2>
            <div className="hints-content">
              <img className="icon" src={imgHappy} alt="icon-float" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <CreateFormUser
          addUser={this.props.addUser}
          backBreadcrumbs={this.backBreadcrumbs}
        />
      </div>
    );
  }
}

export default Createpage;
