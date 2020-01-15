import React from "react";
import "./styles.css";

export default function App() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  };
  return (
    <div>
      <h1>Custom Range Slider</h1>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="50"
          className="slider"
          id="myRange"
        />
        <p>
          Value: <span id="demo" />
        </p>
      </div>
    </div>
  );
}
