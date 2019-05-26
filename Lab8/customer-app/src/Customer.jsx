import React from "react";
import Clock from "./Clock";

class Customer extends React.Component {

    constructor() {
        super();
     }

     Cancel = () => {
        console.log(this.CustomerCode.value);
        console.log(this.CustomerName.value);
        console.log(this.CustomerAmount.value);

        this.CustomerCode.value = '';
        this.CustomerName.value = '';
        this.CustomerAmount.value = '';
    }


    render() {
        return <div>
            <Clock />
            <div>Customer code : <input type="text" ref={(input) => { this.CustomerCode = input }} name="code" id="code" /></div><br />
            <div>Customer name : <input type="text" ref={(input) => { this.CustomerName = input }} name="name" id="name" /></div><br />
            <div>Customer amount : <input type="text" ref={(input) => { this.CustomerAmount = input }} name="amount" id="amount" /></div><br />
            <button onClick={() => this.Cancel()}>Cancel</button>
        </div>;
    }
}

export default Customer;