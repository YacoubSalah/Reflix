import React, { Component } from "react"
import './Movie.css'


class Movie extends Component {

    render() {

        let movieName = this.props.match.params.movieName
        let movie = this.props.movies.find(movie => movie.name === movieName)
        return (
            <div className="movieContainer">
                <h2>{movieName}</h2>
                <img src={movie.image} alt={movie.img} />
                <iframe src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>{movie.description}</h3>
                <h3>{movie.price} Bitcoins</h3>
            </div>
        )

    }

}

export default Movie