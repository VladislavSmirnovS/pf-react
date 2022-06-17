import "./ToolBar.css";
import React from "react";
import IntersectionObserver from "../IntersectionObserver/IntersectionObserver.jsx";
import MutationObserver from "../MutationObserver/MutationObserver.jsx";
import ResizeObserver from "../ResizeObserver/ResizeObserver.jsx";

function ToolBar({ width, setWidth, counter, setCounter }) {
  return (
    <section className="toolBar">
      <IntersectionObserver />
      <ResizeObserver width={width} setWidth={setWidth} />
      <MutationObserver counter={counter} setCounter={setCounter} />
    </section>
  );
}

export default ToolBar;
