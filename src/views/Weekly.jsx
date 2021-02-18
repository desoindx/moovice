import React from "react";
import Card from "./../components/Card";
import moment from "moment";

class Weekly extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        page: props.match.params.page || 1,
      };
    }
  
    componentDidMount() {
      this.loadMovies();
    }
  
    componentDidUpdate() {
        this.loadMovies();
    }
  
    loadMovies() {
        // YYYY-MM-DD
      fetch(
        `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().add(-1, "weeks").format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=46a12a0dcce2af5d37ce67d499098b1f`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.setState({
            movies: response.results,
          });
        });
    }
  
    loadPreviousMovies = () => {
      if (this.state.page > 1) {
        this.setState({
          page: this.state.page - 1,
        });
      }
      window.scrollTo(0,0);
    }
  
    loadNextMovies = () => {
      this.setState({
        page: this.state.page + 1,
      });
      window.scrollTo(0,0);
    };
  
    render() {
      return (
        <>
          <h2>Weekly</h2>
          <div className="container">
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <Card movie={movie} />
                  </div>
                );
              })}
            </div>
            <button onClick={this.loadPreviousMovies}>Previous</button>
            <button onClick={this.loadNextMovies}>Next</button>
          </div>
        </>
      );
    }
}

export default Weekly;