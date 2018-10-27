import React from "react";
import { render } from "react-dom";
import ResultSpecific from "./resultSpecific";
import APICONTEXT from "./APICONTEXT";
class SearchResults extends React.Component {
  componentDidMount() {
    //  console.log("rsearch result mountedh");
    //console.log(this.context);
  }

  render() {
    return (
      <APICONTEXT.Consumer>
        {context => {
          if (context.movieList != null) {
            let movieList = context.movieList.Search;
            //       console.log(movieList);
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
        }}
      </APICONTEXT.Consumer>
    );
  }
}

export default SearchResults;
