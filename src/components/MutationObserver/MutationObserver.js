import React from "react";
import "./MutationObserver.css";

function MutationObserver({ counter, setCounter }) {
  return (
    <section className="config__item">
      <label className="config__nameItem">Mutation Observer:</label>
      <div className="config__counter">
        <button
          className="config__counterBtn"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <p className="config__counterValue">{counter}</p>
        <button
          className="config__counterBtn"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
    </section>
  );
}

export default MutationObserver;
