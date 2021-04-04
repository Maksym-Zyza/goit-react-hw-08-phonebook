import React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import * as authOperations from "./redux/auth/auth-operations";
import PrivateRaute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentToProps();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo={"/contacts"}
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo={"/contacts"}
            component={LoginView}
          />
          <PrivateRaute
            path="/contacts"
            redirectTo={"/login"}
            component={ContactsView}
          />
          {/* <Route path="/todos" component={TodosView} /> */}
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentToProps: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
