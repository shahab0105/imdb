import React from "react";
import { render } from "react-dom";
import SearchForm from "./searchForm";
import APICONTEXT from "./APICONTEXT";

class Jumbotron extends React.Component {
  render() {
    return (
      <APICONTEXT.Consumer>
        {context => (
          <div className="row">
            <div className="jumbotron text-center col-sm-12">
              <h1>MovieKillers</h1>
              <p>
                Fulfilling Your Entertainment Appetite...
                <small>You Nasty Slut</small>
              </p>
              <SearchForm {...context} />
            </div>
          </div>
        )}
      </APICONTEXT.Consumer>
    );
  }
}
export default Jumbotron;
