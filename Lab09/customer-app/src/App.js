import React from 'react';
import './App.css';
import Clock from "./Clock";
import LifecycleApp from "./LifecycleApp";
import EventClass from './EventClass';
import Customer from './Customer';

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
    <div >
      <Customer />
    </div>
  );
}

export default App;