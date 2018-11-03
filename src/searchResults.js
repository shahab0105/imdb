import React, { Component } from "react";
import { render } from "react-dom";
import ResultSpecific from "./resultSpecific";
import redux from "react-redux";
import store from "./store";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.movieList != null) {
      let movieList = this.props.movieList.Search;

      return (
        <div className="row">
          <div className="col-sm-12" id="searchResults">
            {movieList.map(movie => (
              <ResultSpecific movieInfo={movie} key={movie.imdb} />
            ))}
          </div>
        </div>
      );
    } else return <p>Loading</p>;
  }
}
const mapStateToProps = ({ movieList }) => ({ movieList });
export default connect(mapStateToProps)(SearchResults);
//export default SearchResults;
