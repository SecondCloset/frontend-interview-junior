import React, { Component } from "react";
import "./Dropdown.css";

const CITIES = ["Toronto", "Vancouver", "Hamilton"];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { expanded: false, selectedCity: null };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleOutsideClick = e => {
    if (this.myRef && !this.myRef.current.contains(e.target)) {
      this.setState({ expanded: false });
    }
  };

  renderOptionList = () => {
    const onSelect = city =>
      this.setState({
        expanded: false,
        selectedCity: city
      });

    const options = CITIES.map(city => (
      <div className="option" key={city} onClick={() => onSelect(city)}>
        {city}
      </div>
    ));

    return (
      <div
        className={`dropdown-list ${this.state.expanded ? "expanded" : ""}`}
        ref={this.myRef}
      >
        {options}
      </div>
    );
  };

  renderDropDown = () => {
    return (
      <div className="dropdown-wrapper">
        <button onClick={() => this.setState({ expanded: true })}>
          {this.state.selectedCity || "please select a city"} <span />
        </button>
        {this.renderOptionList()}
      </div>
    );
  };

  render() {
    return (
      <div className="q3-classic-dropdown">
        <div className="label">Choose your favorite city:</div>
        {this.renderDropDown()}
      </div>
    );
  }
}

export default Dropdown;
