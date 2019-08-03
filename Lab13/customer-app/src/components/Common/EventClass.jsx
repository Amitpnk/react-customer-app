import React from "react";

class EventClass extends React.Component {

    constructor() {
        super();

        this.state = {
            name: 'Initial data...'
        }
        this.changeNamewithParamBind = this.changeNamewithParamBind.bind(this);
    }

    changeName = () => {
        this.setState({
            name: 'Amit Naik'
        })
    }

    changeNamewithParam = (param) => {
        this.setState({
            name: param
        })
    }

    changeNamewithParamBind = (param) => {
        this.setState({
            name: param
        })
    }

    changeNamefromInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return <div>
            <button onClick={this.changeName}>Change state</button> <br />
            <button onClick={() => this.changeNamewithParam('with parameters')}>Change state with paramater</button><br />
            <button onClick={this.changeNamewithParam.bind(this, 'with parameters bind')}>Change state with paramater bind</button><br />
            <button onClick={() => this.changeNamewithParamBind('with parameters bind in constructor')}>Change state with paramater bind in constructor</button><br />

            Change state with input event : <input type="text" name="" id="" onChange={this.changeNamefromInput} />
            <h4>{this.state.name}</h4>
        </div>;
    }
}

export default EventClass