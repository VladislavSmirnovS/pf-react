import "./ProxyWithObserver.js";
import { useEffect, useState } from "react";

function ProxyWithObserver(props) {
  const [value, setValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    if (value !== 0 && value % 2 === 0) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <section className="proxy">
      <div className="proxy__form">
        <label>Значение для отслеживания:</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="config__proxyValue"
          type="number"
          placeholder="Только четные"
        />
        <button className="test">ok</button>
      </div>
      <div className="proxy__block">
        <label className="proxy__nameItem">Вывожу значение из подписки:</label>
        <p className="proxy__value">{currentValue}</p>
      </div>
    </section>
  );
}

export default ProxyWithObserver;
