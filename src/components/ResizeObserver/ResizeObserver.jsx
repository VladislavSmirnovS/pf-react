import React from "react";

function ResizeObserver({ width, setWidth }) {
  const [resizeCheck, setResizeCheck] = React.useState(true);

  function handleChange() {
    setResizeCheck(!resizeCheck);
    debugger
  }

  return (
    <section className="config__item">
      <label className="config__nameItem">Resize Observer:</label>
      <input checked={resizeCheck} onChange={handleChange} type="checkbox" />
      <label className="config__nameItem">Ширина блока:</label>
      <input
        type="range"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        min="300"
        max="1900"
      />
    </section>
  );
}

export default ResizeObserver;
