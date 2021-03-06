import React, { Component } from "react";
import { connect } from "react-redux";
import * as authOperations from "../redux/auth/auth-operations";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="wrapper">
        <h1 className="title">Registration</h1>

        <form
          onSubmit={this.handleSubmit}
          className="authForm"
          autoComplete="off"
        >
          <label className="authLabel">
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="authLabel">
            Mail
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="authLabel">
            Password
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className="btn" type="submit">
            Registration
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
