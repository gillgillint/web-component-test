import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ReactDOM from "react-dom/client";
import React from "react";
import r2wc from "react-to-webcomponent";

function App() {
  return <div>Hello From React</div>;
}

const WebGreeting = r2wc(App, React, ReactDOM);

customElements.define("web-greeting", WebGreeting);

export default App;
