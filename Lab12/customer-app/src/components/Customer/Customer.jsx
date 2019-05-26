import React from "react";
import Clock from '../Common/Clock';

class Customer extends React.Component {

    constructor() {
        super();

        this.state = {
            // data: [
            //     { code: 1001, name: 'Amit', amount: 1000 },
            //     { code: 1002, name: 'Shwetha', amount: 2000 },
            //     { code: 1003, name: 'Krishna', amount: 3000 },
            //     { code: 1004, name: 'Shiva', amount: 4000 }
            // ]
            data: []
        }

        this.Add = this.Add.bind(this);
    }

    getCustomer = () => {
        fetch(`http://localhost:3004/Customers`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }))
    }

    componentDidMount() {
        this.getCustomer();
    }

    Add = () => {
        let obj = {
            code: this.CustomerCode.value,
            name: this.CustomerName.value,
            amount: this.CustomerAmount.value
        }

        // this.setState(prevState => ({
        //     data: [...prevState.data, obj]
        // }))

        // incase if you want to add value on top of grid

        // this.setState(prevState => ({
        //     data: [obj, ...prevState.data]
        // }))

        let option = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(obj)
        };

        fetch(`http://localhost:3004/Customers`, option)
            .then(res => res.json())


        this.getCustomer();
        this.Cancel();
    }

    Delete = (index, e) => {
        const dataDel = Object.assign([], this.state.data);
        dataDel.splice(index, 1);
        this.setState({ data: dataDel })
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
            <button onClick={() => this.Add()}>Add</button> <button onClick={() => this.Cancel()}>Clear</button>
            <table>
                <tbody>
                    <tr>
                        <td>Customer code</td>
                        <td>Customer name</td>
                        <td>Customer amount</td>
                    </tr>
                    {this.state.data.map((cust, i) => <TableRow key={i} data={cust}
                        delEvent={this.Delete.bind(this, i)}
                    />)}
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
            <td>
                <input type="button" value="delete" onClick={this.props.delEvent} />
            </td>
        </tr>
    }
}

export default Customer;