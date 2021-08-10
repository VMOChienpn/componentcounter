import React, { useState } from "react";

FunctionComponent.propTypes = {};

function FunctionComponent(props) {
  const [number, setNumber] = useState(0);

  function minus() {
    setNumber(number - 1);
  }

  function plus() {
    setNumber(number + 1);
  }

  return (
    <div className="counter">
      <h1 className="counter__title"> Function Component </h1>
      <div className="couter-group">
        <button className="couter__minus" onClick={minus}>
          -
        </button>
        <h1 className="couter__number">{number}</h1>
        <button className="couter__plus" onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
}

export default FunctionComponent;
