import React, { Component } from 'react'
import { connect } from "react-redux";

export class AgeCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 21
        }
    }
    // onAgeUp = () => {
    //     this.setState({
    //         age: this.state.age + 1
    //     })
    // }
    // onAgeDown = () => {
    //     this.setState({
    //         age: this.state.age - 1
    //     })
    // }

    render() {
        return (
            <div>
                <div> Age: <span>{this.props.age}</span> </div>
                <button onClick={this.props.onAgeUp}>Age up</button>
                <button onClick={this.props.onAgeDown}>Age down</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}
const mapDispachToProps = (dispach) => {
    return {
        onAgeUp: () => dispach({ type: 'AGE_UP' }),
        onAgeDown: () => dispach({ type: 'AGE_DOWN' }),
    }
}

export default connect(mapStateToProps, mapDispachToProps) (AgeCounter)
