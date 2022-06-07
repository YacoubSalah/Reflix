import React, { Component } from "react";

class UserDataHeader extends Component {

    render() {

        let user = this.props.user

        return (
            <div>
                <p>user name: {user.name}</p>
                <p>user ID: {user.id}</p>
                <p>user budget: {user.budget}</p>
            </div>
        )

    }
}

export default UserDataHeader