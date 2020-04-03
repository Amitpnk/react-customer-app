import React from "react";

class EventClass extends React.Component {

    constructor() {
        super();

        this.state = {
            name: 'Initial data...'
        }
        this.changeNameBindContructor = this.changeNameBindContructor.bind(this);
    }

    changeName = () => {
        this.setState({
            name: 'Amit Naik'
        })
    }

    changeNamewithParamES6 = (param) => {
        this.setState({
            name: param
        })
    }

    changeNamewithParam() {
        this.setState({
            name: "with bind method"
        })
    }

    changeNameBindContructor() {
        this.setState({
            name: "bind method in constructor"
        })
    }

    changeNamefromInput = (event) => {
        console.log(event)
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return <div>
            <button onClick={this.changeName}>Change state</button> <br />
            <button onClick={() => this.changeNamewithParamES6('with parameters')}>Change state with paramater</button><br />
            <button onClick={this.changeNamewithParam.bind(this)}>Change state with bind</button><br />
            {/* in case of parameter */}
            {/* <button onClick={this.changeNamewithParam.bind(this,'with parameters')}>Change state with bind</button><br /> */}

            <button onClick={this.changeNameBindContructor}>Change state with bind in constructor</button><br />
            {/* in case of parameter */}
            {/* <button onClick={this.changeNameBindContructor('with parameters')}>Change state with paramater bind in constructor</button><br /> */}

            Change state with input event : <input type="text" name="" id="" onChange={this.changeNamefromInput} />
            <h4>{this.state.name}</h4>
        </div>;
    }
}

export default EventClass