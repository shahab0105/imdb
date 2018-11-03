import React from "react";
import { render } from "react-dom";
import Jumbotron from "./jumbotron";
import SearchResults from "./searchResults";
import APICONTEXT from "./APICONTEXT";
import { Router } from "@reach/router";
import Movie from "./movie";
import store from "./store";
import { Provider } from "react-redux";
let secret = process.env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { API_key: secret };
    //constructor ends

    store.dispatch({ type: "NEW_INPUT_VALUE", payload: "nul" });
  }

  updateContext(key, val) {
    this.setState({ [key]: val });
  }
  componentDidMount() {
    this.updateContext("age", 22);
  } //end of componentDidMount
  render() {
    return (
      <Provider store={store}>
        <div>
          <Jumbotron />
          <Router>
            <SearchResults path="/" />
            <Movie path="/movie/:movieID" API_key={process.env.API_KEY} />
          </Router>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app-root"));
