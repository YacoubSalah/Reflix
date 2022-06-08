import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserWidget extends Component {

    updateActiveUser = (userID) => {
        this.props.updateActiveUser(this.props.user.name)
    }

    render() {

        let user = this.props.user

        return (
            <div onClick={this.updateActiveUser}>
                <Link to="/Catalog/">
                    <h3>{user.name}</h3>
                </Link>
            </div>
        )
        
    }
}

export default UserWidget