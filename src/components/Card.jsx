import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "./default_poster.png",
    };
  }

  componentDidMount() {
    fetch(`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`)
      .then((response) => {
        return response.blob();
      })
      .then((response) => {
        this.setState({
          image: URL.createObjectURL(response),
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.movie.poster_path === prevProps.movie.poster_path) {
      return;
    }

    fetch(`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`)
      .then((response) => {
        return response.blob();
      })
      .then((response) => {
        this.setState({
          image: URL.createObjectURL(response),
        });
      });
  }

  render() {
    return (
      <>
        <img
          className="moviePoster"
          //src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}
          src={this.state.image}
          alt={`affiche de ${this.props.movie.title}`}
        />
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.release_date}</p>
        <p>{this.props.movie.overview}</p>
      </>
    );
  }
}

export default Card;
