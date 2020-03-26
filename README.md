# react-tutorial

This project was generated with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) is a tool (built by developers at Facebook) 

To set up your react application you need to have Node >= 6 and npm >= 5.2 on your machine.

## Table of Contents

- [About React application](#about-react-application)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Main Available Scripts](#available-scripts)
  - [npm run start](#npm-start)
  - [npm run test](#npm-test)
  - [npm run build](#npm-run-build)
- Sample application with each labs
    - [Lab 1 - Running first react application](https://github.com/Amitpnk/react-customer-app/tree/master/Lab01/customer-app)
    - [Lab 2 - Templating using JSX](https://github.com/Amitpnk/react-customer-app/tree/master/Lab02/customer-app)
    - [Lab 3 - Components](https://github.com/Amitpnk/react-customer-app/tree/master/Lab03/customer-app)
    - [Lab 4 - Working on props](https://github.com/Amitpnk/react-customer-app/tree/master/Lab04/customer-app)
    - [Lab 5 - Working on states](https://github.com/Amitpnk/react-customer-app/tree/master/Lab05/customer-app)
    - [Lab 6 - Component life cycle](https://github.com/Amitpnk/react-customer-app/tree/master/Lab06/customer-app)
    - [Lab 7 - React events](https://github.com/Amitpnk/react-customer-app/tree/master/Lab07/customer-app)
    - [Lab 8 - Using Refs create customer page](https://github.com/Amitpnk/react-customer-app/tree/master/Lab08/customer-app)
    - [Lab 9 - Using key creating dynamic customer table](https://github.com/Amitpnk/react-customer-app/tree/master/Lab09/customer-app)
    - [Lab 10 - Organize the project, adding add and delete event to table](https://github.com/Amitpnk/react-customer-app/tree/master/Lab10/customer-app)
    - [Lab 11 - React router](https://github.com/Amitpnk/react-customer-app/tree/master/Lab11/customer-app)
    - [Lab 12 - Calling API (by creating fake server)](https://github.com/Amitpnk/react-customer-app/tree/master/Lab12/customer-app)
    - [Lab 13 - Environment setup for dev and prod](https://github.com/Amitpnk/react-customer-app/tree/master/Lab13/customer-app)

## About React application

React application is javascript library for building user interface.

In our applicatin, we are using React version 16.8.6 and react-scripts 3.0.1

From Sep 23,2017 i.e., react 16.0.0 onward Facebook has released with MIT License

## Sending Feedback

For feedback can drop mail to my email address amit.naik8103@gmail.com or you can create [issue](https://github.com/Amitpnk/react-customer-app/issues/new)

## Folder Structure

By end of lab, your project will look like this:

```
customer-app/
  README.md
  node_modules/
  package.json
  package-lock.json
  db.json
  public/
    index.html
    favicon.ico
  src/
    assets/
      images/
        log.svg
    components/
      App/
        App.css
        App.js
        App.test.js
      Common/
        Clock.jsx
        EventClass.jsx
        LifecycleApp.js
      Customer/
        Customer.jsx
      Routing/
        Routing.jsx
      User/
        User.jsx
    index.css
    index.js
```

In Lab 10, will look how we can organise our react application


To create a project, run below command line prompt

`npx create-react-app customer-app` for creating application  
`cd customer-app` for changing directory to other folder  
`code .` to open application in VS code editor  
`npm run start` or `npm start` for start application

## Sample application with each labs

### Lab 1 - Running first react application

<!-- What and why we have to use React
You can find answer here -->

To create a project, run below command line prompt

```
// For creating react application
$ npx create-react-app customer-app

// For changind directory to other folder
$ cd customer-app

// To open application in VS code editor  
$ code .

// To run application
$ npm run start

```

#### Prerequisite to learn react

Install Node and npm latest version <br/> 
Install Visual Studio Code <br/>

### Lab 2 - Templating using JSX

JSX - Javascript + XML <br/>
It allows us to look HTML syntax which transform you light weight javascript object

We can implement React without JSX, please find below URL where JSX compiler

<https://babeljs.io/repl>

TODO

### Lab 3 - Components

ReactJS component <br/>
Components are building blocks of React applicatin
They allow you to split UI into independent & reusable process. It make code decouple
<br/><br/>
There is 2 way of writing component
* Class based component
* Functional component
  * Pure function
  * ES6 function

From React's point of view, all above components are equivalent

```javascript
function App() {
  // Pure function component
  function PureFunction() {
    return <div> Pure function </div>;
  }
 
  // Functinal ES6 component (using arrow function)
  const FunctionES6 = () => {
    return <div> Function with ES 6 </div>;
  }

  // Class based component
  class ClassBasedComponent extends React.Component {
    render() {
      return <div> Class based component </div>;
    }
  }

  return (
    <div className="App">
      <h1>Types of component</h1>
      <PureFunction />
      <FunctionES6 />
      <ClassBasedComponent />
    </div>
  );
}
```

### Lab 4 - Working on props

Normally we pass attributes like class, href, id, etc in HTML element
```html
<input type="text" value="Amit">
```
Now if we want to pass value to component we have to use Props

```javascript
function App() {
  
  // Pure function component
  function PureFunction(props) {
    return <div> {props.message} </div>;
  }

  // Functinal ES6 component (using arrow function)
  const FunctionES6 = (props) => {
    return <div> {props.message} </div>;
  }
  
  // Class based component
  class ClassBasedComponent extends React.Component {
    render() {
      return <div> {this.props.message} </div>;
    }
  }

  return (
    <div className="App">
      <h1>Working on props</h1>
      <PureFunction message="Pure function" />
      <FunctionES6 message="Function with ES 6" />
      <ClassBasedComponent message="Class based component " />
    </div>
  );
}
```

### Lab 5 - Working on states

State allows us to create components that are dynamic and interactive

Create Clock.jsx file
```jsx
import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
    render() {
        return (
            <div>It is {this.state.date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock;
```

import clock.jsx in app.js file

```jsx
function App() {
  return (
    <div className="App">
      <h1>Working on states</h1>
      <Clock />
      <br/>
      <HookState/>
    </div>
  );
}
```

React 16.8 Update: Hooks let you use state and other React features without writing classes

Create HookState.jsx file

```jsx
import React, { useState } from "react";

function HookState(props) {
    const [counter, setCounter] = useState(0);

    return (<div>
        <b>Counter with useState hook</b> <br /> <br />
        <>Counter value : {counter}</> <br /> <br />
        <button onClick={() => setCounter(counter + 1)} >+</button>
        <button onClick={() => setCounter(counter - 1)} >-</button>
    </div>);
}

export default HookState;
```

### Lab 6 - Component life cycle

Life cycle methods
* ComponentWillMount
* ComponentDidMount
* ComponentWillReceiveMount
* ShouldComponentupdate
* ComponentWillUpdate
* ComponentDidUpdate
* ComponentWillUnmount

```jsx
import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    // executed after the first render
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
```

You can find full life cycle method in LifecycleApp.js file

### Lab 7 - React events

Below are some few way (i.e., 5 ways) we can bind event

* Event binding
* Event with parameter
* Event with parameter binding
* Event with parameter binding in constructor
* Event binding with input event

```jsx
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
```


### Lab 8 - Using Refs create customer page

ref is used to return reference to element

Create Customer.jsx file

```javascript
import React from "react";

export class Customer extends React.Component {
    constructor() {
        super();
    }

    Cancel = () => {

        this.CustomerCode.value = '';
        this.CustomerName.value = '';
        this.CustomerAmount.value = '';
    }

    render() {
        return (<div>
            <div>Customer code : <input type="text" ref={(input) => { this.CustomerCode = input }} /></div>
            <div>Customer name : <input type="text" ref={(input) => { this.CustomerName = input }} /></div>
            <div>Customer amount : <input type="text" ref={(input) => { this.CustomerAmount = input }} /></div>
            <input type="button" value="Cancel" onClick={()=>this.Cancel()} />
        </div>);
    }
}
```

### Lab 9 - Using key creating dynamic customer table

React keys are useful when working with dynamically created components or when we want to alter by users.
Set key value will keep our component uniquely identified after change

```javascript
import React from "react";

export class Customer extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                { code: 1001, name: 'Amit', amount: 5000 },
                { code: 1002, name: 'Shwetha', amount: 6000 },
                { code: 1003, name: 'Kalpita', amount: 6000 },
            ]
        }
    }

    Cancel = () => {

        this.CustomerCode.value = '';
        this.CustomerName.value = '';
        this.CustomerAmount.value = '';
    }

    render() {
        return (<div>
            <div>Customer code : <input type="text" ref={(input) => { this.CustomerCode = input }} /></div>
            <div>Customer name : <input type="text" ref={(input) => { this.CustomerName = input }} /></div>
            <div>Customer amount : <input type="text" ref={(input) => { this.CustomerAmount = input }} /></div>
            <input type="button" value="Cancel" onClick={() => this.Cancel()} />

            <div>
                <table>
                    <tr>
                        <td>Customer code</td>
                        <td>Customer name</td>
                        <td>Customer amount</td>
                    </tr>
                    <tbody>
                        {this.state.data.map((value, i) =>
                            <TableRow data={value} key={i} />
                        )}
                    </tbody>
                </table>
            </div>
        </div >);
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

```

### Lab 10 - Organize the project, adding add and delete event to table

Organize project as per [folder structure](#folder-structure)

```javascript
import React from "react";

constructor() {
    // ...

    this.Add = this.Add.bind(this);
}
Add = () => {
    let obj = {
        code: this.CustomerCode.value,
        name: this.CustomerName.value,
        amount: this.CustomerAmount.value
    }

    this.setState(prevState => ({
        data: [...prevState.data, obj]
    }))

    // incase if you want to add value on top of grid

    // this.setState(prevState => ({
    //     data: [obj, ...prevState.data]
    // }))

    this.Cancel();
}

Delete = (index, e) => {
    const dataDel = Object.assign([], this.state.data);
    dataDel.splice(index, 1);
    this.setState({ data:  dataDel })
}


    render() {
        return <div>
        <table>
                <tbody>
                    <tr>
                        <td>Customer code</td>
                        <td>Customer name</td>
                        <td>Customer amount</td>
                    </tr>
            // ...
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

```

### Lab 11 - React router

React Router is the routing library for React

```
// install react-router-dom to application
$ npm install react-router-dom --save

```

Create Routing.jsx in *Routing* folder and User.jsx in *User* folder 

In Routing.jsx 
```javascript
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Customer from '../Customer/Customer';
import User from '../User/User';

const active = {
    "border-style": "solid",
    "color": "white",
    "background-color": "black"
}
class Routing extends React.Component {

    render() {
        return <Router>
            <NavLink to="/" exact activeStyle={active} >Home</NavLink> &nbsp;
            <NavLink to="/About/" exact activeStyle={active} >About</NavLink>&nbsp;
            <NavLink to="/Customer" exact activeStyle={active} >Customer</NavLink> &nbsp;
            <NavLink to={`/User/${"Amit"}`} exact activeStyle={active} >user Amit</NavLink>

            <Route path="/" strict exact render={() => { return (<h1>Welcome to home page</h1>) }} /><Route />
            <Route path="/About/" strict exact render={() => { return (<h1>Welcome to about <NavLink to={`/User/${"Krishna"}`} exact activeStyle={{ color: 'green' }} >user Krishna</NavLink></h1>) }} />
            <Route path="/Customer" strict exact component={Customer} />
            <Route path="/User/:username" exact render={({ match }) => { return (<User username={match.params.username} />) }} />
        </Router>;
    }
}

export default Routing
```

In User.jsx
```javascript
import React from "react";

class User extends React.Component {

    render() {
        return <div> <h1>Welcome user {this.props.username}</h1> </div>
    }
}

export default User;

```