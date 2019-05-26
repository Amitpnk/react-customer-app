import React from 'react';
import './App.css';

function App() {

  function PureFunction() {
    return <div> Pure function </div>;
  }

  const FunctionES6 = () => {
    return <div> Function with ES 6 </div>;
  }

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

export default App;
