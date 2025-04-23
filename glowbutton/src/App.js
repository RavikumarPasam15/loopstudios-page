import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box gradient1">
          <div className="content" data-text="NEON BUTTON">
            <input type="text" value="NEON BUTTON" readOnly />
          </div>
        </div>
        <div className="reflection">NEON BUTTON</div>
      </div>

      <div className="wrapper">
        <div className="box gradient2">
          <div className="content" data-text="NEON BUTTON">
            <input type="text" value="NEON BUTTON" readOnly />
          </div>
        </div>
        <div className="reflection">NEON BUTTON</div>
      </div>

      <div className="wrapper">
        <div className="box gradient3">
          <div className="content" data-text="NEON BUTTON">
            <input type="text" value="NEON BUTTON" readOnly />
          </div>
        </div>
        <div className="reflection">NEON BUTTON</div>
      </div>
    </div>
  );
}

export default App;
