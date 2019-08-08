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
        <p className="App-intro">
          Please notice the followings before you start:
        </p>
        <ul>
          <li>Has to be your own code</li>
          <li>
            You are allowed to install any library to accomplish this test
          </li>
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
            Hope you enjoy this test, please compress your files into one zip
            file
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
