import React, { Component } from "react"

class Movie extends Component {

    render() {

        let movieName = this.props.match.params.movieName

        return (
            <div>
                {movieName}
            </div>
        )

    }

}

export default Movie