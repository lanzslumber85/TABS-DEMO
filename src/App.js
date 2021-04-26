import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Tab-1">Hello world...</div>
        <div label="Tab-2">I am ReactJS</div>
      </Tabs>
    </div>
  );
}

export default App;
