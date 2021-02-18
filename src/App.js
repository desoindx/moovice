import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PopularView from "./views/Popular";
import PopularBattle from "./views/PopularBattle";
import Weekly from "./views/Weekly";
import WeeklyBattle from "./views/WeeklyBattle";
import { AnimatedSwitch } from "react-router-transition";

// Functional component
const App = () => {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Moovice
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/popular/1">
                    Popular
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/popularBattle">
                    PopularBattle
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/weekly">
                    Weekly
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/weeklyBattle">
                    WeeklyBattle
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/favorites">
                    Favorites
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/popular/:page" component={PopularView} />
          <Route path="/popularBattle" component={PopularBattle} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weeklyBattle" component={WeeklyBattle} />
          <Route path="/favorites" component={Favorites} />
        </AnimatedSwitch>
      </BrowserRouter>
    );
}

export default App;
