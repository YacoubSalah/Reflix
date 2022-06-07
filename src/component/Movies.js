import React, { Component } from "react";
import MovieWidget from "./MovieWidget";

class Movies extends Component {

    renderWidgets = () => {
        let section = this.props.section || ""
        let movies = this.props.movies || []
        if (section === "Rented Movies") {
            return this.renderRentedMovies(movies)
        } else if (section === "Available Movies") {
            return this.renderAvailableMovies(movies)
        }
    }

    renderRentedMovies = (movies) => {
        if (movies.length > 0) {
            return (
                <div>
                    <h3>Rented Movies</h3>
                    {movies.map(movie => <MovieWidget movie={movie} key={movie.id} buttonDescription="removeMovieButton" buttonClickMethod={this.props.removeMovie} />)}
                </div>
            )
        } else {
            return (
                <div>
                    < h3 > Rented Movies </h3 >
                    < h4 > no movies are currently rented </h4 >
                </div>
            )
        }
    }

    renderAvailableMovies = (movies) => {
        if (movies.length > 0) {
            return (
                <div>
                    < h3 > Available Movies </h3 >
                    {movies.map(movie => <MovieWidget movie={movie} key={movie.id} buttonDescription="addMovieButton" buttonClickMethod={this.props.addMovie} />)}
                </div>
            )
        } else {
            return (
                <div>
                    < h3 > Available Movies </h3 >
                    < h4 > no movies are currently Available </h4 >
                </div>
            )
        }
    }

    render() {
        return this.renderWidgets()
    }
}

export default Movies