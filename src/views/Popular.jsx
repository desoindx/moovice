import React from "react";
import Card from "./../components/Card";

class Popular extends React.Component {

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

  componentDidUpdate(prevProps, prevState) {
      if (prevState.page !== this.state.page) {
        this.loadMovies();
      }
  }

  loadMovies() {
      console.log("load movies");
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f&page=${this.state.page}`
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
        <h2>Popular</h2>
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

export default Popular;
