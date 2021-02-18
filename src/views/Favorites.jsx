import React from "react";
import Card from "../components/Card";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        const favIds = this.getStorage();
        if (favIds === null) {
            this.state = {
                movies: [],
                favIDs: []
            }
        } else {
            this.state = {
                movies: [],
                favIDs: JSON.parse(favIds)
            }
            
        }
    }

    componentDidMount() {
        this.state.favIDs.map((id) => {
            this.getMovie(id);
        })
    }

    getStorage() {
        return localStorage.getItem("favoritesId")
    }

    getMovie = (id) => {
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=46a12a0dcce2af5d37ce67d499098b1f&language=fr-FR`)
        .then((response) => {return response.json()})
        .then((response) => {
            const newMovies = this.state.movies;
            newMovies.push(response);
            this.setState({
                movies: newMovies
            })
        })
    }

    render() {
        return (
            <>
            <h2>Favorites</h2>
            {this.state.movies.map((movie) => {
                return <Card movie={movie} />
             })}
            </>
        )
    }
}

export default Favorites;