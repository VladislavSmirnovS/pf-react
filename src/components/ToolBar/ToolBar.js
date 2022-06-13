import "./ToolBar.css";

import IntersectionObserver from "../IntersectionObserver/IntersectionObserver";
import MutationObserver from "../MutationObserver/MutationObserver";
import ResizeObserver from "../ResizeObserver/ResizeObserver";

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
