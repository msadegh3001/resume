import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" },
  };
  schema = {
    username: Joi.string().required().label('User'),
    password: Joi.string().required().label('Pass'),
  };
  validateForm = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    let errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = this.validateForm();
    if (validateResult) this.setState({ errors: validateResult });
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>
        <h1 className="mb-5">
          Login <br></br>
        </h1>
        <Input
          name="username"
          id="username"
          label="username"
          onchange={this.handleChange}
          value={this.state.account.username}
          error={this.state.errors.username}
        />
        <Input
          name="password"
          id="password"
          label="password"
          onchange={this.handleChange}
          value={this.state.account.password}
          error={this.state.errors.password}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
