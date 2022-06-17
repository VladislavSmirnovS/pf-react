import React from "react";
import { useState } from "react";
import Header from "../Header/Header.jsx";
import ToolBar from "../ToolBar/ToolBar.jsx";
import ProxyWithObserver from "../ProxyWithObserver/ProxyWithObserver.jsx";
import CardList from "../CardList/CardList.jsx";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [width, setWidth] = useState(600);
  return (
    <div className="page">
      <Header counter={counter} />
      <ToolBar
        width={width}
        setWidth={setWidth}
        counter={counter}
        setCounter={setCounter}
      />
      <ProxyWithObserver />
      <CardList width={width} />
    </div>
  );
}

export default App;
