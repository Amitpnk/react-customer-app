import React from 'react';
import './App.css';

function App() {
  return (
    // with jsx
    // <div className="App">
    //   <h1>
    //     My first react application
    //   </h1>
    // </div>

    // without jsx 
    // https://babeljs.io/repl converts jsx to javascript object
    React.createElement("div", {
      className: "App"
    }, React.createElement("h1", null, "My first react application with babel"))
  );
}

export default App;
