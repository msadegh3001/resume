import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./components/Movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import notFound from "./components/notfound";
import MovieForm from './components/moviform';
import LoginForm from './components/loginform';
const App = () => {
  return (
    <main className="container">
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/movies/:name" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/notfound" component={notFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/notFound"></Redirect>
      </Switch>
    </main>
  );
};
export default App;
