import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserService from "../../services/user.service";
import Home from "./Home";
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
import Feedback from "../feedback.component";
import Page404 from "./Page404";
import NavigationPublic from "../NavigationPublic";
import NavigationUser from "../NavigationUser";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          user: response.data
        });
      },
      error => {
        this.setState({
          user:
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
    console.log(this.state)
    if(!this.state.user) return null
    if(this.state.user == "User Content."){
      return (
        <>
       <Router>
            <NavigationUser />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/QuizHome' component={HomeQuiz} />
              <Route path='/q_creating' component={Quiz} />
              <Route exact path='/quiz/:id' component={Quiz} />
              <Route path='/Guides' component={Guides} />
              <Route path='/Sign-up' component={Register} />
              <Route path='/Login' component={Login} />
              <Route path='/profile' component={Profile} />
              <Route path="/tools" component={Tools} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/devices" component={Devices} />
              <Route path="/creating" component={Creating} />
              <Route path="/communication" component={Communication} />
              <Route path="/feedback" component={Feedback} />
              <Route component={Page404} />
            </Switch>
          </Router>
      </>
    );
      
    } else {
      
      return (
        <>
       <Router>
            <NavigationPublic />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Quiz' component={HomeQuiz} />
              <Route path='/q_creating' component={Quiz} />
              <Route path='/Guides' component={Guides} />
              <Route path='/Sign-up' component={Register} />
              <Route path='/Login' component={Login} />
              <Route path="/tools" component={Tools} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/devices" component={Devices} />
              <Route path="/creating" component={Creating} />
              <Route path="/communication" component={Communication} />
              <Route path="/feedback" component={Feedback} />
              <Route component={Page404} />
            </Switch>
          </Router>
      </>
    );
    }
   
  }
}