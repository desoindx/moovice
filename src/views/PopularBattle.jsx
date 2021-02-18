import React from "react";
import Card from "./../components/Card";

class PopularBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favoritesId: [],
    };
  }

  // https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a12a0dcce2af5d37ce67d499098b1f"
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

  onMovieClick = (id) => {
    const newFavoritesId = this.state.favoritesId;
    newFavoritesId.push(id);
    localStorage.setItem("favoritesId", JSON.stringify(newFavoritesId));
    this.setState({
      currentBattle: this.state.currentBattle + 2,
      favoritesId: newFavoritesId,
    });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <h2>Movies are loading</h2>;
    } else if (this.state.currentBattle >= this.state.movies.length) {
      return <h2>Vous avez parcouru tout les films</h2>;
    } else {
      return (
        <>
          <h2>Popular battle</h2>
          <div className="container">
            <div className="row">
              <div
                onClick={() =>
                  this.onMovieClick(
                    this.state.movies[this.state.currentBattle].id
                  )
                }
                className="col-sm-6 col-md-4 col-lg-3"
              >
                <Card movie={this.state.movies[this.state.currentBattle]} />
              </div>
              <div
                onClick={() =>
                  this.onMovieClick(
                    this.state.movies[this.state.currentBattle + 1].id
                  )
                }
                className="col-sm-6 col-md-4 col-lg-3"
              >
                <Card movie={this.state.movies[this.state.currentBattle + 1]} />
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default PopularBattle;
