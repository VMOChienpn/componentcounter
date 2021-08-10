import React, { Component } from "react";
import "./main.scss";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  plus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title"> Class Component </h1>
        <div className="couter-group">
          <button className="couter__minus" onClick={() => this.minus()}>
            -
          </button>
          <h1 className="couter__number">{this.state.count}</h1>
          <button className="couter__plus" onClick={() => this.plus()}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
