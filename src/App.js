import React from "react";
import "./styles.css";
import "mvp.css";
import Data from "./Component";

function App() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div className="App">
      <h1>Some Famous Star Wars Charaters</h1>
      <Data />
      <footer>Copyright @{date} - Randeep Virk</footer>
    </div>
  );
}

export default App;
