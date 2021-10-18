import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onSum, Sum, Counters, onRemove, onAdd, onDecrease } =
      this.props;
    return (
      <React.Fragment>
        {Counters.map((item) => (
          <Counter
            counter={item}
            onRemove={onRemove}
            onAdd={onAdd}
            onDecrease={onDecrease}
            key={item.id}
            value={item.value}
          ></Counter>
        ))}

        <div className="m-4 d-flex justify-content-between align-items-center">
        <button onClick={onReset} className="btn btn-primary btn-sm p-3 col-1">
          reset
          </button>
          <h4 className="col">total :{Sum}</h4>
        </div>
     
      </React.Fragment>
    );
  }
}

export default Counters;
