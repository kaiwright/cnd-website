import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import letterImg from "./assets/Letter.png";
import letterImgOpen from "./assets/LetterOpen.png";
import instagramIcon from "./assets/Instagram.png";
import blueskyIcon from "./assets/Bluesky.png";
import linkedinIcon from "./assets/Linkedin.png";
// import page3 from "./assets/page3.png";
// import missing from "./assets/page4.png";

function App() {

const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container">
      <div className="top-part"></div>
      <div className="board">
        <div className="sign">
        </div>
        <div className="page1">
          <h1>HEAR YE! HEAR YE!</h1>
          <h4>Four adventurers set out on a perilous journey to create narrative-driven fantasy games</h4>
        </div>
        <div className="page2">
          <h1>WANTED!!</h1>
          <h4>Followers to support us in our quest</h4>
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
              <img id="ig" src={instagramIcon} width={50} />
            </a>
            <a href="https://www.linkedin.com/company/107463949/" target="_blank">
              <img id="li" src={linkedinIcon} width={50} />
            </a>
            <a href="https://bsky.app/profile/croakanddaggergame.bsky.social" target="_blank">
              <img id="bs" src={blueskyIcon} width={50} />
            </a>

          </div>
        </div>
 <div className="letter" onClick={() => setIsOpen(true)}>
          <img src={isOpen ? letterImgOpen : letterImg} alt="Letter" />
        </div>
        {/* <div className="page3">
          <img src={page3} />
        </div>
        <div className="page4">
          <img src={missing} />
        </div> */}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
