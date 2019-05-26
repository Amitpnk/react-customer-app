import React from "react";
import Clock from "./Clock";

class Customer extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [
                { code: 1001, name: 'Amit', amount: 1000 },
                { code: 1002, name: 'Shwetha', amount: 2000 },
                { code: 1003, name: 'Krishna', amount: 3000 },
                { code: 1004, name: 'Shiva', amount: 4000 }
            ]
        }
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
            <button onClick={() => this.Cancel()}>Clear</button>
            <table>

                <tbody>
                    <tr>
                        <td>Customer code</td>
                        <td>Customer name</td>
                        <td>Customer amount</td>
                    </tr>
                    {this.state.data.map((cust, i) => <TableRow key={i} data={cust} />)}
                </tbody>
            </table>
        </div>;
    }
}

class TableRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.data.code}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.amount}</td>
        </tr>
    }
}

export default Customer;