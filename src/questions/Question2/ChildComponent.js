import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ChildComponent.scss";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    const { clickCounts } = props;
    const calculatedValue = clickCounts * 2;
    this.state = { calculatedValue };
  }

  render() {
    return (
      <div className="child-component">
        <div>clicks x 2 = {this.state.calculatedValue}</div>
        <button onClick={() => this.setState({ calculatedValue: 0 })}>
          reset
        </button>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  clickCounts: PropTypes.number.isRequired
};

export default ChildComponent;
