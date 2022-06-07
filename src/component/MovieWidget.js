import React, { Component } from "react";
import { Link } from "react-router-dom"
import './MovieWidget.css'

class MovieWidget extends Component {

    createButton = () => {
        let buttonDescription = this.props.buttonDescription
        if (buttonDescription === "addMovieButton") {
            return <button onClick={this.handleButton}>Add Movie</button>
        } else {
            return <button onClick={this.handleButton}>Remove Movie</button>
        }
    }

    handleButton = () => {
        this.props.buttonClickMethod(this.props.movie.name)
    }

    render() {

        let movie = this.props.movie

        return (

            <div className="widgetContainer">
                <Link to={"/Movie/" + movie.name}>
                    <div>
                        <h4>{movie.name}</h4>
                        <h5>{movie.price} Bitcoins</h5>
                    </div>
                </Link >
                {this.createButton()}
            </div >

        )

    }

}

export default MovieWidget