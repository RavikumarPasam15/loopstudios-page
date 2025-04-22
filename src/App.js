import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LiveDemoPage from "./LiveDemoPage";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <header className="header">
        <h1><span className="highlight">100</span> <span className="js-box">JS</span> Projects<span className="dot">.com</span></h1>
        <nav style={{paddingRight:"200px"}}>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main>
        <h2>Testimonial Slider Project - HTML, CSS, JavaScript</h2>

        <div className="card">
          <img src="/images/person.jpg" alt="person" className="profile-pic" />
          <div className="discription-card">
            <p>
              <em>
                I would also like to say thank you to all your staff. Wow what great service, I love it!
                Apple impressed me on multiple levels.
              </em>
              <br /><br />
              <span className="person">Ravi kumar</span>
            </p>
          </div>
        </div>

        <section className="description" style={{paddingLeft:"200px"}}>
          <h4><strong>Project description</strong></h4>
          <p>
            In this project, you will learn how to build a testimonial slider using HTML, CSS and JavaScript.
            We use a timer to change the sliders automatically and also we have added a bountiful animation showing the slides.
          </p>
          <p><strong>Testimonial Slider Project Live Demo (Preview)</strong></p>
          <button className="btn live" onClick={() => navigate("/demo")}>
            Live Demo
          </button>

          <p><strong>Testimonial Slider Project Source Code (Github)</strong></p>
          <a href="#" className="btn source">Source Code</a>
        </section>
      </main>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<LiveDemoPage />} />
      </Routes>
    </Router>
  );
}
export default App;
