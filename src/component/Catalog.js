import React, { Component } from "react";
import Movies from "./Movies";
import UserDataHeader from "./UserDataHeader";


class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            inputValue: "",
        }
    }

    bindInputValue = (event) => {
        let newSearchFieldValue = event.target.value
        this.setState({ searchFieldValue: newSearchFieldValue })
    }

    getMovies = (filter) => {

        let allMovies = this.props.movies
        let rentedMovies = []
        let availableMovies = []

        allMovies.forEach(movie => {
            if (this.isMovieSearched(movie)) {
                if (this.isMovieRented(movie)) {
                    rentedMovies.push(movie)
                } else {
                    availableMovies.push(movie)
                }
            }
        })

        if (filter === "rented") {
            return rentedMovies
        } else if (filter === "available") {
            return availableMovies
        }

    }

    isMovieRented = (movie) => {
        let isRented = false
        let user = this.props.users.find(user => user.name === this.props.activeUserName)
        user.movies.forEach(id => {
            if (movie["id"] === id){
                isRented = true
            }
        })
        return isRented
    }

    isMovieSearched = (movie) => {
        return true
    }

    render() {

        let movies = this.props.movies
        let users = this.props.users
        let activeUserName = this.props.activeUserName

        return (
            <div >
                <UserDataHeader user={users.find(u => u.name === activeUserName)} />
                <input type="text" name="searchBar" val={this.state.inputValue} onChange={this.bindInputValue} />
                <Movies section="Rented Movies" movies={this.getMovies("rented")} removeMovie={this.props.removeMovie}  />
                <br></br>
                <Movies section="Available Movies" movies={this.getMovies("available")} addMovie={this.props.addMovie} />
            </div>
        )

    }
}

export default Catalog