import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./About";
import Check from "./Check";
import Example from "./Example";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Example />} />
        <Route path="/check" element={<Check />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}