import React from "react";
import { render } from "react-dom";
import { Button } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import store from "./store";
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      key: this.props.API_key,
      updateContext: this.props.updateContext
    };
  }

  handleOnClick(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className="form" id="Searchform">
        <input
          type="text"
          value={this.props.newInputValue}
          onChange={event => {
            store.dispatch({
              type: "NEW_INPUT_VALUE",
              payload: event.target.value
            });
          }}
        />
        <Button onClick={this.props.handleSubmit}>SEARCH A MOVIE</Button>
      </div>
    );
  }
}

function updateMovieList() {
  return function(dispatch, getState) {
    //function
    let keyword = encodeURI(store.getState().newInputValue);

    let endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${
      process.env.API_KEY
    }`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "UPDATE_movieList", payload: data });
      });
  };
}

const mapDispatchToProps = dispatch => ({
  handleSubmit() {
    dispatch(updateMovieList());
  }
});

const mapStateToProps = ({ newInputValue }) => ({ newInputValue });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
