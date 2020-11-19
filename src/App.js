import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import { GlobalProvider } from "./Context/GlobalState";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
export default function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}
