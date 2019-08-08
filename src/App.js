import React from "react";
import "./App.scss";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import Question3 from "./questions/Question3";
import Question4 from "./questions/Question4";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Second Closet Interview Session (Frontend)
          </h1>
        </header>
        <p className="App-intro">Please note the following:</p>
        <ul>
          <li>Solutions must be your own code</li>
          <li>You can install any library to complete the test</li>
        </ul>
        <hr />
        <Question1 />
        <hr />
        <Question2 />
        <hr />
        <Question3 />
        <hr />
        <Question4 />
        <hr />
        <div className="happy-ending">
          <p>
            Hope you enjoyed the test. Please compress your files into one zip
            file and send it back to us.
          </p>
          <strong>
            DO NOT include <code>node_modules</code> in your zip
          </strong>
        </div>
      </div>
    );
  }
}

export default App;
