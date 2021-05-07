import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import Guides from './components/pages/Guides';
import SignUp from './components/pages/SignUp';
import SignIp from './components/pages/SignIn';

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
        <>
          <Router>
            <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Quiz' component={Quiz} />
              <Route path='/Guides' component={Guides} />
              <Route path='/Sign-up' component={Register} />
              <Route path='/Login' component={Login} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </Router>

        </>
    );
  }
}

const Application = () => {
  const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Quiz' component={Quiz} />
          <Route path='/Guides' component={Guides} />
          <Route path='/Sign-up' component={Register} />
          <Route path='/Login' component={Login} />
        </Switch>
      </Router>

    </>
  );
}

export default App;