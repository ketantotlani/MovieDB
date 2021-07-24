import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
// import axios from "axios";

// const URL = "https://api.themoviedb.org/3/search/multi?api_key=22016cddd8194d83d236a8f02bd88949&language=en-US&query=";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ""
    };
  }

  
  onMovieInput = (event) => {
    console.log(event.target.parentElement.firstChild.value);
    this.setState({
      movieTitle: event.target.parentElement.firstChild.value
    });
    this.props.movieSearch(this.state.movieTitle);
    // this.props.albumSearch(this.state.artist)

    
  };

  render() {
    return (
      <>
      <header className="nav">
        <div>
          <Link className="name" to={"/"}>
            <SiThemoviedatabase />
            MovieDB
          </Link>
        </div>
        <div>
          <input
            onChange={this.onMovieInput}
            type="text"
            name="moviesearch"
            id="moviesearch"
            placeholder="Search For Movies"
          />
          <button onClick={this.onMovieInput} className="searchbtn">
            Search
          </button>
        </div>
      </header>
      <header className="mobnav">
        <div className="container">
        <div>
          <Link className="name" to={"/"}>
            <SiThemoviedatabase />
            MovieDB
          </Link>
        </div>
        <div>
          <input
            onChange={this.onMovieInput}
            type="text"
            name="moviesearch"
            id="moviesearch"
            placeholder="Search For Movies"
          />
          <button onClick={this.onMovieInput} className="searchbtn">
            Search
          </button>
        </div>
        </div>
      </header>
      </>
    );
  }
}

export default Nav;
