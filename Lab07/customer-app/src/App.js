import React from 'react';
import './App.css';
import Clock from "./Clock";
import LifecycleApp from "./LifecycleApp";
import EventClass from './EventClass';

function App() {

  // function PureFunction(props) {
  //   return <div> {props.message} </div>;
  // }

  // const FunctionES6 = (props) => {
  //   return <div> {props.message} </div>;
  // }

  // class ClassBasedComponent extends React.Component {
  //   render() {
  //     return <div> {this.props.message} </div>;
  //   }
  // }

  return (
    <div className="App">
      <h1>Event handling in react</h1>
      <br /><br />
      <EventClass />
    </div>
  );
}

export default App;