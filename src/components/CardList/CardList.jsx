import "./CardList.css";
import React from "react";
import Card from "../CustomElement/CustomElement.js";
import { useRef, useState, useEffect } from "react";

function CardList({ width }) {
  const lastItemRef = useRef();
  const observer = useRef();
  const [arr, setArr] = useState([1]);
  const [style, setStyle] = useState({
    width: "300px",
    backgroundColor: "",
  });

  useEffect(() => {
    if (width > 1600) {
      setStyle({ width: `${width}px`, backgroundColor: "red" });
    } else if (width > 1300) {
      setStyle({ width: `${width}px`, backgroundColor: "orange" });
    } else if (width > 1000) {
      setStyle({ width: `${width}px`, backgroundColor: "yellow" });
    } else if (width > 800) {
      setStyle({ width: `${width}px`, backgroundColor: "green" });
    } else if (width > 600) {
      setStyle({ width: `${width}px`, backgroundColor: "blue" });
    } else {
      setStyle({ width: `${width}px`, backgroundColor: "indigo" });
    }
  }, [width]);

  useEffect(() => {
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        setArr([...arr, arr.length + 1]);
      }
    };
    observer.current = new IntersectionObserver(callback, { threshold: 1 });
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  });
  
  return (
    <section className="cardList" style={style}>
      <p>{width}</p>
      {arr.map((a) => {
        return <card-custom key={a} ref={lastItemRef}></card-custom>;
      })}
    </section>
  );
}
window.customElements.define("card-custom", Card);
export default CardList;
