import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.clockId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockId);
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>It is {this.state.date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock;