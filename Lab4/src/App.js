import React from 'react';
import './App.css';

function App() {

  function PureFunction(props) {
    return <div> {props.message} </div>;
  }

  const FunctionES6 = (props) => {
    return <div> {props.message} </div>;
  }

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

export default App;
