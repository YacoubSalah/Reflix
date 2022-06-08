import React, { Component } from "react";

class UserDataHeader extends Component {

    render() {

        let user = this.props.user

        return (
            <div>
                <h3>{user.name} ({user.budget} Bitcoins)</h3>
            </div>
        )

    }
}

export default UserDataHeader