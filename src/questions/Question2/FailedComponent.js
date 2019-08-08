import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import "./FailedComponent.scss";

class FailedComponent extends Component {
  state = {
    clicks: 2
  };

  render() {
    return (
      <div className="failed-component">
        <div className="parent-component">
          <button
            onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
          >
            Add one
          </button>
          <div>clicks: {this.state.clicks}</div>
          <ChildComponent clickCounts={this.state.clicks} />
        </div>
      </div>
    );
  }
}

export default FailedComponent;
