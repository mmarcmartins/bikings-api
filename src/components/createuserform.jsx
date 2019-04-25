import React, { Component } from "react";
import { randomGenerator, translateDays, daysOfWeek } from "../utils/utils";
import "../App.scss";
import { Link } from "react-router-dom";
class CreateUserForm extends Component {

  state = {
    name: "",
    username: "",
    city: "",
    email: "",
    selectedRadio: "",
    selectedCheckbox: Array(6),
    error: ""
  };

  resetStates = () => {
    const initialState = {
      name: "",
      username: "",
      city: "",
      email: "",
      selectedRadio: "",
      selectedCheckbox: Array(6),
      error: ""
    };
    this.setState({ ...initialState });
  };

  handleCheckbox = (evt, index) => {
    const auxState = this.state.selectedCheckbox;
    auxState[index] = evt.target.checked;
    this.setState({
      selectedCheckbox: auxState
    });
  };

  handleRadio = evt => {
    this.setState({
      selectedRadio: evt.currentTarget.value
    });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  validateFields = () => {
    if (this.state.selectedRadio === "") {
      this.setState({ error: "Select at least one ride" });
      return false;
    }

    const checkBox = this.state.selectedCheckbox.filter(c => c);
    if (checkBox.length === 0) {
      this.setState({ error: "Select at least one day of week" })
      return false;
    }
    return true;
  }

  addNewUser = evt => {
    evt.preventDefault();
    if (this.validateFields()) {
      const {
        name,
        username,
        city,
        email,
        selectedRadio,
        selectedCheckbox
      } = this.state;

      const newUser = {
        id: randomGenerator(200),
        name: name,
        username: username,
        email: email,
        city: city || '',
        posts: randomGenerator(20),
        albums: randomGenerator(10),
        days: translateDays(selectedCheckbox),
        ride: selectedRadio,
        photos: randomGenerator(500)
      };
      this.props.addUser(newUser);
      this.resetStates();
      alert("Usuário cadastrado com sucesso");
    }
  };
  render() {
    const rideGroup = ["Always", "Sometimes", "Never"];
    const { name, username, city, email, selectedRadio } = this.state;
    return (
      <form className="form-createuser" onSubmit={evt => this.addNewUser(evt)}>
        <div className="fields-holder">
          <div className="half-form--first">
            <span className="input-holder" aria-labelledby="usernameadvice">
              <label className="label-margin" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={evt => this.handleChange(evt)}
                required
              />
              {username === "" && (
                <p className="input-holder-advice" id="usernameadvice">
                  Please enter your username
                </p>
              )}
            </span>

            <span className="input-holder" aria-labelledby="nameadvice">
              <label className="label-margin" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={evt => this.handleChange(evt)}
              />
              {name === "" && (
                <p className="input-holder-advice" id="nameadvice">
                  Please enter your name
                </p>
              )}
            </span>

            <span className="input-holder" aria-labelledby="emailadvice">
              <label className="label-margin" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={evt => this.handleChange(evt)}
              />
              {email === "" && (
                <p className="input-holder-advice" id="emailadvice">
                  Please enter your email
                </p>
              )}
            </span>
          </div>

          <div className="half-form--second">
            <span
              className="input-holder input-holder--city input-optional"
              aria-labelledby="citynameadvice"
            >
              <label className="label-margin" htmlFor="city">
                City
              </label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={evt => this.handleChange(evt)}
              />
              {city === "" && (
                <p className="input-holder-advice" id="citynameadvice">
                  Please enter your city name
                </p>
              )}
            </span>

            <div className="input-holder">
              <label className="label-margin">Ride in group ?</label>
              <ul className="radiogroup">
                {rideGroup.map((ride, index) => (
                  <li key={index} className="radiooption">
                    <input
                      type="radio"
                      id={ride}
                      value={ride}
                      name="radiogroup-ride"
                      checked={selectedRadio === ride}
                      onChange={evt => this.handleRadio(evt)}
                    />
                    <label className="radiobtn" htmlFor={ride}>
                      {ride}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="input-holder">
              <label className="label-margin">Days of the week</label>
              <ul className="checkboxgroup">
                {daysOfWeek.map((day, index) => (
                  <li key={index} className="checkboxoption">
                    <input
                      type="checkbox"
                      id={day}
                      name={day}
                      value={day}
                      checked={this.state.selectedCheckbox[index] === true}
                      onChange={evt => this.handleCheckbox(evt, index)}
                    />
                    <label htmlFor={day}>{day}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <input type="submit" className="button button-save" value="Save" />
          <input
            type="button"
            className="button button-discard"
            value="Discard"
            onClick={() => this.resetStates()}
          />
          <Link
            className="linkButton users"
            to="/users"
            onClick={() => this.props.backBreadcrumbs()}
          >
            See all users
          </Link>
        </div>

        {this.state.error !== "" && (
          <div class="message">
            <p>{this.state.error}</p>
          </div>
        )}
      </form>
    );
  }
}

export default CreateUserForm;
