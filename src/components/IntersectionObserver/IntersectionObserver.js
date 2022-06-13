import React from "react";

function IntersectionObserver() {
  const [infinityScroll, setInfinityScroll] = React.useState(true);

  function handleChange() {
    setInfinityScroll(!infinityScroll);
  }

  return (
    <section className="config__item">
      <label className="config__nameItem">
        Intersection Observer: Включить Infinity Scroll
      </label>
      <input checked={infinityScroll} onChange={handleChange} type="checkbox" />
    </section>
  );
}

export default IntersectionObserver;
