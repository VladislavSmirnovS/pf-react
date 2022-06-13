import { useEffect, useRef } from "react";
import "./Header.css";

function Header({ counter }) {
  const observer = useRef();

  useEffect(() => {
    observer.current.style.background =
      observer.current.style.background === "yellow" ? "orange" : "yellow";
  }, [counter]);

  return (
    <header className="header" ref={observer}>
      <div className="header__title">
        <p>
          На странице продемонстрирована работа Resize, Mutation, Intersection
          Observer. Инфинити скролл (Intersection). Изменение header в
          зависимсти от изменения другого элемента (Mutation). Изменение цвета
          при достижении определенной ширины(Resize).
        </p>
        <p>
          При инфинити скролле добавляется кастомный HTML, при нажатии на
          который меняется DOM элемента на теневой. При изменении инпута,
          значение передается подписанному на это изменение элементу, который
          через Proxy принимает или не принимает значение.
        </p>
      </div>
    </header>
  );
}

export default Header;
