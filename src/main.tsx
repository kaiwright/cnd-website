import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import letterImg from "./assets/Letter.png";
import instagramIcon from "./assets/Instagram.png";
import blueskyIcon from "./assets/BlueSky.png";
import linkedinIcon from "./assets/Linkedin.png";

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="sign"></div>
        <div className="page1">
          <div>HEAR YE! HEAR YE!</div>
          <p>Four adventurers set out on a perilous journey to create narrative-driven fantasy games</p>
        </div>
        <div className="page2">
          <div>WANTED!!</div>
          <p>Followers to support us in our quest</p>
          <div className="email-form">
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/kaiwright"
              method="post"
              target="popupwindow"
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://buttondown.com/kaiwright', 'popupwindow');
              }}
              className="embeddable-buttondown-form"
            >
              <input type="email" placeholder="Enter your email" name="email" id="bd-email" />

              <input type="submit" value="Submit" id="bd-email-btn" />
            </form>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/croakanddaggergames/" target="_blank">
              <img src={instagramIcon} width={50} />
            </a>
            <a href="https://www.linkedin.com/company/107463949/" target="_blank">
              <img src={linkedinIcon} width={50} />
            </a>
            <a href="https://bsky.app/profile/croakanddaggergame.bsky.social" target="_blank">
              <img src={blueskyIcon} width={50} />
            </a>

          </div>
        </div>
        <div className="letter">
          <img src={letterImg} />
        </div>
        <div className="page3"></div>
        <div className="page4"></div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
