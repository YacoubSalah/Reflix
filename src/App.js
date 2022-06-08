import { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './component/Home'
import Catalog from './component/Catalog';
import Movie from './component/Movie';


import moviesDB from './Database/Movies'
import usersDB from './Database/Users'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: moviesDB.movies,
      users: usersDB.users,
      activeUserName: usersDB["users"][0].name
    }
  }

  updateActiveUser = (user) => {
    this.setState({ activeUserName: user })
  }

  removeMovieFromUser = (movieID) => {
    let tempUsers = [...this.state.users]
    let currentUser = tempUsers.find(user => user.name === this.state.activeUserName)
    let movieIndex = currentUser.movies.find(movie => movie === movieID)
    currentUser.movies.splice(movieIndex, 1)
    let moviePrice = this.state.movies.find(movie => movie.id === movieID).price
    currentUser.budget += moviePrice
    this.setState({ users: tempUsers })
  }

  addMovieToUser = (movieID => {
    let tempUsers = [...this.state.users]
    let currentUser = tempUsers.find(user => user.name === this.state.activeUserName)
    let userBudget = currentUser.budget
    let moviePrice = this.state.movies.find(movie => movie.id === movieID).price
    if (userBudget > moviePrice) {
      currentUser.movies.push(movieID)
      currentUser.budget -= moviePrice
      this.setState({ users: tempUsers })
    } else {
      alert("User budget is not enough")
    }

  })

  render() {
    return (

      <Router>
        <div>

          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/Catalog/">Catalog</Link>

          <Route path="/" exact render={() => <Home users={this.state.users} updateActiveUser={this.updateActiveUser} />} ></Route>

          <Route path="/catalog/" exact render={() =>
            <Catalog movies={this.state.movies} users={this.state.users} activeUserName={this.state.activeUserName}
              removeMovie={this.removeMovieFromUser} addMovie={this.addMovieToUser} />}>
          </Route>

          <Route path="/Movie/:movieName" exact match render={(match) => <Movie match={match.match} movies={this.state.movies} />}></Route>

        </div>
      </Router>
    )
  }
}

export default App;