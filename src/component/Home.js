import React, { Component } from "react";
import UserWidget from "./UserWidget";

class Home extends Component {


    render() {
        
        let users = this.props.users

        return (
            <div>
                {users.map(user => <UserWidget user={user} updateActiveUser={this.props.updateActiveUser} key={user.id} />)}
            </div>
        )

    }
}

export default Home