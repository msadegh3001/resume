import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    console.log("rmoved");
  }
  render() {
    return (
      <div className="m-4">
        <div className="d-flex align-items-center">
          <h1 className="mr-3 col-1">{this.props.counter.value}</h1>

          <div className="">
            <button
              onClick={() => this.props.onAdd(this.props.counter)}
              className="btn btn-info btn-sm px-3 m-1"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrease(this.props.counter)}
              className="btn btn-info btn-sm px-3 m-1"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onRemove(this.props.counter)}
              className="btn btn-danger btn-sm px-3 m-1"
            >
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
