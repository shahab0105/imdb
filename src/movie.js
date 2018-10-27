import React from "react";
import APICONTEXT from "./APICONTEXT";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    let movieData = {
      Title: "Hey Arnold!",
      Year: "1994–2004",
      Rated: "TV-Y7",
      Released: "01 Jun 1994",
      Runtime: "15 min",
      Genre: "Animation, Comedy, Drama",
      Director: "N/A",
      Writer: "Craig Bartlett, Steve Viksten, Joe Ansolabehere",
      Actors:
        "Francesca Marie Smith, Jamil Walker Smith, Dan Castellaneta, Justin Shenkarow",
      Plot:
        "The everyday life of Arnold, a 4th-grader in a nameless city that resembles Brooklyn, New York, who lives in a multi-racial boarding house with his grandparents and a motley assortment of neighbors and friends.",
      Poster: "x.jpg"
    };
    this.state = movieData;
  }
  componentDidMount() {
    let endpoint = `https://www.omdbapi.com/?i=${this.props.movieID}&apikey=${
      this.props.API_key
    }`;
    // console.log(endpoint);
    fetch(endpoint)
      .then(data => data.json())
      .then(data => this.setState(data));
    console.log(this.state);
  }

  render() {
    return (
      <APICONTEXT.Consumer>
        {context => {
          return (
            <div className="row">
              <div className="col-sm-2">
                <img src={this.state.Poster} />
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="row-sm-12">
                    <h1>{this.state.Title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="row-sm-12">
                    <p>{this.state.Plot}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </APICONTEXT.Consumer>
    );
  }
}

export default Movie;
