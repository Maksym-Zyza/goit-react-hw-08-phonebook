import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import * as authOperations from "./redux/auth/auth-operations";

class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentToProps();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
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
