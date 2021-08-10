import React from "react";
import { useSelector, useDispatch } from "react-redux";

function FCreduxImmerJS(props) {
  const selector = useSelector((state) => state.number);
  const dispatch = useDispatch();
  function minus() {
    dispatch({ type: "MINUS" });
  }
  function plus() {
    dispatch({ type: "PLUS" });
  }
  return (
    <div className="counter">
      <h1 className="counter__title"> Function Redux ImmerJS </h1>
      <div className="couter-group">
        <button className="couter__minus" onClick={minus}>
          -
        </button>
        <h1 className="couter__number">{selector}</h1>
        <button className="couter__plus" onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
}

export default FCreduxImmerJS;
