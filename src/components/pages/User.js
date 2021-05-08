import React, { Component } from "react";

import UserService from "../../services/user.service";
import Guides from "./Guides";
import Home from "./Home";
import Quiz from './Quiz';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
        <>
      <Home/>
      <Guides/>
      <Quiz/>
      </>
    );
  }
}