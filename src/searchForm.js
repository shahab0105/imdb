import React from "react";
import { render } from "react-dom";
import { Button } from "reactstrap";
import axios from "axios";
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      key: this.props.API_key,
      updateContext: this.props.updateContext
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnClick(event) {
    this.setState({ search: event.target.value });
    //console.log(this.state.search);
  }

  handleSubmit(event) {
    let keyword = encodeURI(this.state.search);

    let endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${
      this.state.key
    }`;
    //console.log(endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => this.props.updateContext("movieList", data));
  }

  //grabMovieData(key,)
  componentDidMount() {
    //  console.log(this.state.key);
    // console.log("hah");
    //   fetch("https://www.omdbapi.com/?t=fight+club&apikey=7e9e8c93")
    //   .then(data => data.json())
    // .then(data => console.log(data));
  }
  render() {
    return (
      <div className="form" id="Searchform">
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleOnClick}
        />
        <Button onClick={this.handleSubmit}>SEARCH A BOOK</Button>
      </div>
    );
  }
}

export default SearchForm;
