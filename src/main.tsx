import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import letterImg from "./assets/Letter.png";
import letterImgOpen1 from "./assets/LetterOpen1.png";
import letterImgOpen2 from "./assets/LetterOpen2.png";
import letterImgOpen3 from "./assets/LetterOpen3.png";
import letterImgOpen4 from "./assets/LetterOpen4.png";
import instagramIcon from "./assets/instagram.png";
import blueskyIcon from "./assets/bluesky.png";
import linkedinIcon from "./assets/linkedin.png";
import tiktokIcon from "./assets/tiktok.png";
import youtubeIcon from "./assets/youtube.png";
import letterImgClosedShort from "./assets/LetterClosedMobile.png";
import CNDSmallLogo from "./assets/CNDSmallLogo.png";
import Fern from "./assets/fern.png";   

function App() {
  const imagesToPreload = [
    letterImg,
    letterImgOpen1,
    letterImgOpen2,
    letterImgOpen3,
    letterImgOpen4,
    letterImgClosedShort,
    CNDSmallLogo,
    instagramIcon,
    blueskyIcon,
    linkedinIcon,
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [openImg, setOpenImg] = React.useState(letterImgOpen1);
  const openImages = [
    letterImgOpen1,
    letterImgOpen2,
    letterImgOpen3,
    letterImgOpen4,
  ];

  const handleLetterClick = () => {
    if (!isOpen) {
      // Only pick a new image when opening, and never the same as last open
      const filtered = openImages.filter((img) => img !== openImg);
      const randomImg = filtered[Math.floor(Math.random() * filtered.length)];
      setOpenImg(randomImg);
    }
    setIsOpen((open) => !open);
  };

  const [closedImg, setClosedImg] = React.useState(letterImg);

  React.useEffect(() => {
    function updateClosedImg() {
      if (window.innerWidth < 1000) {
        // adjust threshold as needed
        setClosedImg(letterImgClosedShort);
      } else {
        setClosedImg(letterImg);
      }
    }
    updateClosedImg();
    window.addEventListener("resize", updateClosedImg);
    return () => window.removeEventListener("resize", updateClosedImg);
  }, []);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let loaded = 0;
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded += 1;
        if (loaded === imagesToPreload.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-circle">
          <img src={CNDSmallLogo} alt="Loading..." className="loading-logo" />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="top-part"></div>
      <div className="board">
        <div className="sign"></div>
        <div className="page1">
          <h1>Welcome!</h1>
          <h4>
            We're Croak and Dagger Games, an indie studio creating a magical
            archaeology game called Fern: Beneath the Roots.
          </h4>
        </div>
        <div className="page2">
          <h1>Support our quest!</h1>
          {/* <h4>Support us in our quest</h4> */}
          {/* <div className="email-form">
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
          </div> */}
          <div className="socials">
            <a
              href="https://www.instagram.com/croakanddaggergames/"
              target="_blank"
            >
              <img id="ig" src={instagramIcon} width={40} />
            </a>
            <a
              href="https://www.tiktok.com/@croakanddaggergames"
              target="_blank"
            >
              <img id="tt" src={tiktokIcon} width={40} />
            </a>
            <a
              href="https://www.youtube.com/@croakanddaggergames"
              target="_blank"
            >
              <img id="yt" src={youtubeIcon} width={40} />
            </a>
            <a
              href="https://bsky.app/profile/croakanddaggergame.bsky.social"
              target="_blank"
            >
              <img id="bs" src={blueskyIcon} width={40} />
            </a>
          </div>
        </div>
        <div className="fern">
          <img src={Fern} alt="Fern" />
        </div>
        <div className="letter" onClick={handleLetterClick}>
          <img src={isOpen ? openImg : closedImg} alt="Letter" />
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
