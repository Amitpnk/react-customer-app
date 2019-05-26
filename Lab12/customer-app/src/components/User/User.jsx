import React from "react";

class User extends React.Component {

    render() {
        return <div> <h1>Welcome user {this.props.username}</h1> </div>
    }
}

export default User;

