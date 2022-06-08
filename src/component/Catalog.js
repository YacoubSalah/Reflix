import React, { Component } from "react";
import Movies from "./Movies";
import UserDataHeader from "./UserDataHeader";


class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            searchString: ""
        }
    }

    bindInputValue = (event) => {
        let newSearchString = event.target.value
        this.setState({ searchString: newSearchString })
    }

    getMovies = (moviesGroup) => {

        let allMovies = this.props.movies
        let rentedMovies = []
        let availableMovies = []
        let searchRegex = new RegExp(this.state.searchString , 'i')

        allMovies.forEach(movie => {
            if (searchRegex.test(movie.name)) {
                if (this.isMovieRented(movie)) {
                    rentedMovies.push(movie)
                } else {
                    availableMovies.push(movie)
                }
            }
        })
        
        if (moviesGroup === "rented") {
            return rentedMovies
        } else if (moviesGroup === "available") {
            return availableMovies
        }

    }

    isMovieRented = (movie,) => {
        let isRented = false
        let user = this.props.users.find(user => user.name === this.props.activeUserName)
        user.movies.forEach(id => {
            if (movie["id"] === id) {
                isRented = true
            }
        })
        return isRented
    }

    render() {

        let movies = this.props.movies
        let users = this.props.users
        let activeUserName = this.props.activeUserName

        return (
            <div >
                <UserDataHeader user={users.find(u => u.name === activeUserName)} />
                <input type="text" name="searchBar" val={this.state.searchString} onChange={this.bindInputValue} />
                <Movies section="Rented Movies" movies={this.getMovies("rented")} removeMovie={this.props.removeMovie} />
                <br></br>
                <Movies section="Available Movies" movies={this.getMovies("available")} addMovie={this.props.addMovie} />
            </div>
        )

    }
}

export default Catalog