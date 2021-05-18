import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserService from "../../services/user.service";
import Home from "./Home";
import Navigation from '../Navigation'
import Quiz from './Quiz';
import Guides from './Guides';
import Tools from './Tools';
import Login from "../login.component";
import Register from "../register.component";
import Profile from "../profile.component";
import Privacy from "./Privacy";
import Devices from "./Devices";
import Creating from "./Creating";
import Communication from "./Communication";
import HomeQuiz from "./HomeQuiz";

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
       <Router>
            <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Quiz' component={HomeQuiz} />
              <Route path='/q_creating' component={Quiz} />
              <Route path='/Guides' component={Guides} />
              <Route path='/Sign-up' component={Register} />
              <Route path='/Login' component={Login} />
              <Route path='/profile' component={Profile} />
              <Route path="/tools" component={Tools} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/devices" component={Devices} />
              <Route path="/creating" component={Creating} />
              <Route path="/communication" component={Communication} />
              <Route component={Communication} />
            </Switch>
          </Router>
      </>
    );
  }
}