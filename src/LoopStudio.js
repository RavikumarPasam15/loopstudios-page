import React from "react";

function LoopStudio() {
  return (
    <>
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px;
          background-image: url('/images/LoopStudio.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          font-family: Arial, sans-serif;
          height: 450px;
        }

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .logo {
          font-size: 38px;
          font-weight: bold;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
          margin-left:25%;
          font-family:'Arial', sans-serif;

        }

        .tagline {
          font-size: 20px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          border: 2px solid white;
          padding: 50px 50px;
          display: inline-block;
          margin-top: 40%; 
          width:100%
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .nav-links a:hover {
          color: #00ffff;
           text-decoration: underline;
        }
.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px; /* space between columns */
  row-gap: 20px;    /* space between rows */
  padding: 40px 60px;
}


.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px; 
   aspect-ratio: 1 / 1;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
}


/* Hover overlay using ::after */
.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.7); 
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.image-container:hover::after {
  opacity: 1;
}
 .image-label {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: start;
  color: white;
  font-weight: 600;
  padding: 40px;
  font-size: 42px;
  white-space: normal; 
  word-wrap: break-word;
  width:52%;
  
}


.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 60px;
  background-color: #161b24;
  color: white;
  font-family: Arial, sans-serif;
}


.footer-links {
  display: flex;
  gap: 25px;
  margin-top: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.footer-links a:hover {
  color: #00ffff;
}
  .footer-right {
  display: flex;
  flex-direction: column;      
  align-items: flex-end;      
  margin-left: auto;           
  gap: 10px;                   
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


      `}</style>

      <header className="header">
        <div className="left-content">
          <div className="logo"style={{ fontFamily: 'Arial, sans-serif' }}>loopstudios</div>
          <span className="tagline">IMMERSIVE EXPERIENCES THAT DELIVER</span>
        </div>

        <nav className="nav-links">
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </nav>
      </header>
      <div style={{ display: "flex", justifyContent: "center", padding: "5%" }}>
        <img src="/images/VR.jpg" />
      </div>
      <div style={{
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        width: "40%",
        marginRight: "35%",
        marginTop: "7%"

      }}>
        <span style={{fontSize:"24px",marginBottom:"20px"}}>The leader in interactive VR</span>
        <span style={{fontSize:"16px",width:"115%"}}>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span style={{ marginLeft: "10px",fontSize:"24Px",marginTop:"10%",marginBottom:"3%" }}>Our creations</span>
        </div>
        <div style={{ marginRight: "10px" }}>
          <button style={{ padding: "12px 24px" }}>SEE ALL</button>
        </div>

      </div>

      <div className="image-grid">
        <div className="image-container"><img src="/images/deapearth.jpg" alt="img1" />
        <div className="image-label">DEEP EARTH</div>
        </div>
        <div className="image-container"><img src="/images/acrcade.jpg" alt="img2" />
        <div className="image-label">NIGHT ARCADE</div>
        </div>
        <div className="image-container"><img src="/images/Sport.jpg" alt="img3" />
        <div className="image-label">SOCCER TEAM VR</div>
        </div>
        <div className="image-container"><img src="/images/car2.jpg" alt="img4" />
        <div className="image-label" style={{width:"30%"}}>THE GRID</div>
        </div>
        <div className="image-container"><img src="/images/Road.jpg" alt="img5" />
        <div className="image-label">FROM UP ABOVE VR</div>
        </div>
        <div className="image-container"><img src="/images/glaxy.jpg" alt="img6" />
        <div className="image-label">POCET BOREALIS</div>
        </div>
        <div className="image-container"><img src="/images/robot.jpg" alt="img7" />
        <div className="image-label">THE CURIOSITY</div>
        </div>
        <div className="image-container"><img src="/images/fisheye.jpg" alt="img8" />
        <div className="image-label">MAKE IT FISH EYE</div>
        </div>
       

      </div>
      <footer className="footer">
  <div className="footer-left">
    <div>Loop Studio</div>
    <div className="footer-links">
      <a href="#">About</a>
      <a href="#">Career</a>
      <a href="#">Events</a>
      <a href="#">Products</a>
      <a href="#">Support</a>
    </div>
  </div>
  <div className="footer-right">
  <img src="/images/Capture2.PNG" alt="Capture" />
  <span>© 2021 Loopstudios. All rights reserved.</span>
</div>


</footer>


    </>
  );
}

export default LoopStudio;
