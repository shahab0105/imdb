import React from "react";
import { render } from "react-dom";
import Jumbotron from "./jumbotron";
import SearchResults from "./searchResults";
import APICONTEXT from "./APICONTEXT";
import { Router } from "@reach/router";
import Movie from "./movie";
let secret = process.env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { API_key: secret };
    //constructor ends
  }

  updateContext(key, val) {
    this.setState({ [key]: val });
    //console.log("updatecontext");
    //console.log(this.state.movieList);
  }
  componentDidMount() {
    this.updateContext("age", 22);
  } //end of componentDidMount
  render() {
    return (
      <div>
        <APICONTEXT.Provider
          value={{
            API_key: this.state.API_key,
            updateContext: this.updateContext.bind(this),
            movieList: this.state.movieList
          }}
        >
          <Jumbotron />
          <Router>
            <SearchResults path="/" />
            <Movie path="/movie/:movieID" API_key={process.env.API_KEY} />
          </Router>
        </APICONTEXT.Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("app-root"));
