import React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
class ResultSpecific extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row resultSpecific">
        <div className="col-sm-4 authorImage">
          <img src={this.props.movieInfo.Poster} />
        </div>
        <div className="col-sm-8 BookInfoBrief">
          <blockquote>
            <Link to={`movie/${this.props.movieInfo.imdbID}`}>
              <h1>{this.props.movieInfo.Title}</h1>
            </Link>
            <footer className="blockquote-footer">
              {this.props.movieInfo.Year}
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ResultSpecific;
