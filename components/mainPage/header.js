import { useState } from 'react'
import ImageLink from '../common/imageLink'
import MainMenu from '../common/mainMenu'
import LanguagePopup from '../common/languagePopup'

const Header = () => {


  const prefix = "header"
  const navbarClass = `${prefix}-navbar`
  const bannerClass = `${prefix}-banner`
  const menuClass = `${prefix}-menu`
  const bannerImgClass = `${prefix}-banner-img`
  const socialClass = `${prefix}-social`
  const hamburgerClass = `${prefix}-hamburger`
  const [popup, setPopup] = useState(false)

  const onScroll = () => {
    var scrollThreshold = 40
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (width <= 1023) {
      scrollThreshold=3
    }
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
      document.getElementById("home").classList.add("header-border");
    } else {
      document.getElementById("home").classList.remove("header-border");
    }
  }

  return (<>
    {popup && <MainMenu onClose={() => setPopup(false)} />}
    <header className={navbarClass}>
      <div className={bannerClass}>
        <nav >
          <a href="#home">
            <img src="/img/logotype.png" srcSet="/img/logotype@2x.png 2x, img/logotype@3x.png 3x"
              className={bannerImgClass} />
          </a>
        </nav>
      </div>
      <div className={menuClass}>
        <nav className="menu-link" style={{ marginLeft: "auto" }} >
          <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">Магазин</a>
        </nav>
        <nav className="menu-link" style={{ marginLeft: "40px", marginRight: "40px" }}>
          <a href="#pathfinder">Путівник</a>
        </nav>
        <nav className="menu-link" style={{ marginRight: "auto" }} >
          <span className="disabled">Блог</span>
        </nav>
      </div>
      <div className={socialClass}>
        <nav style={{ marginRight: "10px" }}>
          <LanguagePopup/>
        </nav>
        <nav>
          <ImageLink href="#"
            src="/img/viber.svg"
            hoverSrc="/img/viber-hover.svg"
            imgWidth="40px" imgHeight="40px" />
        </nav>

        <nav style={{ marginLeft: "15px" }}>
          <ImageLink href="https://www.facebook.com/ovchynnikova.nadiia/"
            src="/img/facebook.svg"
            hoverSrc="/img/facebook-hover.svg"
            imgWidth="40px" imgHeight="40px" />
        </nav>
        <nav style={{ marginLeft: "15px" }}>
          <ImageLink href="http://instagram.com/flowers__way/"
            src="/img/instagram.svg"
            hoverSrc="/img/instagram-hover.svg"
            imgWidth="40px" imgHeight="40px" />
        </nav>
      </div>
      <div className={hamburgerClass}>
        <nav >
          <div onClick={() => setPopup(true)}>
            <img src="/img/menu.png" srcSet="/img/menu@2x.png 2x, img/menu@3x.png 3x" />
          </div>
        </nav>
      </div>
    </header>
    <style jsx>{`

    .${navbarClass} {
      align-items: center;
      display: flex;
      height: 100%
    }
    .${bannerImgClass} {
      width: 212px;
      height: 35px;
      object-fit: contain;
    }
    .${bannerClass} {
      justify-content: start;
      margin-right: auto;
      width: 225px;
    }
    .${hamburgerClass} {
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: 15px;
    }
    .${socialClass} {
      align-items: center;
      display: flex;
      margin-left: auto;
      width: 225px;
      justify-content: flex-end;
    }
    .${menuClass} {
      display: flex;
      font-family: Montserrat;
      font-size: 17px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.79px;
      color: #061434;
    }
    .menu-link {

    }
    a:link {
      text-decoration: none;
      color: #061434;
    }

    a:visited {
      text-decoration: none;
       color: #061434;
    }

    .disabled {
      opacity: 0.5;
    }

    .menu-link a:hover {
      color: var(--primarycolor);
    }

    .menu-link a::after {
      content: "";
      display: block;
      position: relative;
      bottom: -8px;
      left: 0px;
      width: 0%;
      height: 2px;
      background: var(--primarycolor);
    }

    .menu-link a:hover::after {
      width: 100%;
    }

    .header-border header::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--light-blue-grey);
        z-index: -1;
    }

    .header-border header {
        background-color: #ffffff;
    }

    @media only screen and (max-width: 1023px) {
      .${menuClass} {
        display: none;
      }
      .${socialClass} {
        display: none;
      }
      .${bannerImgClass} {
        width: 238px;
        object-fit: contain;
      }
    }

    @media only screen and (min-width: 1024px) {
      .${hamburgerClass} {
        display: none;
      }
    }

    @media only screen and (max-width: 1166px) {
      .${socialClass} {
        width: auto;
      }
      .${bannerClass} {
        width: auto;
      }
    }

    `}</style>
  </>)
}

export default Header