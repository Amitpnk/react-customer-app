import React, { Component } from 'react'

export class AgeCounter extends Component {
    constructor() {
        super();
        this.state = {
            age: 21
        }
    }
    onAgeUp = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    onAgeDown = () => {
        this.setState({
            age: this.state.age - 1
        })
    }

    render() {
        return (
            <div>
                <div> Age: <span>{this.state.age}</span> </div>
                <button onClick={this.onAgeUp}>Age up</button>
                <button onClick={this.onAgeDown}>Age down</button>
            </div>
        )
    }
}

export default AgeCounter
