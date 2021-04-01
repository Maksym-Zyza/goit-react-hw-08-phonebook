import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";

const App = () => {
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
};

export default App;
