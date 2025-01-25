import React from "react";
import "./Footer.scss";
import instagram from "../../assets/insta.svg";
import facebook from "../../assets/fecebook.svg";
import twitter from "../../assets/twitter.svg";
import pinteres from "../../assets/pinteres.svg";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__box footer">
            <div className="footer__left">
              <ul className="footer__left__list list">
                <li className="list__item">
                  <h1 className="list__item-title">Contact Us</h1>
                </li>
                <li className="list__item">
                  <h2 className="list__item-name">Email</h2>
                  <a href="#" className="list__item-link">
                    needhelp@Organia.com
                  </a>
                </li>
                <li className="list__item">
                  <h2 className="list__item-name">Phone</h2>
                  <a href="#" className="list__item-link">
                    666 888 888
                  </a>
                </li>
                <li className="list__item">
                  <h2 className="list__item-name">Adrees</h2>
                  <a href="#" className="list__item-link">
                    88 road, borklyn street, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__center">
              <div className="footer__center__logo">
                <img src={logo} alt="" className="footer__center__logo-img" />
                <a href="#" className="footer__center__logo-text">
                  Organick
                </a>
              </div>
              <p className="footer__center-text">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <div className="footer__center__box">
                <a href="#" className="footer__center__box-link">
                  <img
                    src={instagram}
                    alt=""
                    className="footer__center__box-img"
                  />
                </a>
                <a href="#" className="footer__center__box-link">
                  <img
                    src={facebook}
                    alt=""
                    className="footer__center__box-img"
                  />
                </a>
                <a href="#" className="footer__center__box-link">
                  <img
                    src={twitter}
                    alt=""
                    className="footer__center__box-img"
                  />
                </a>
                <a href="#" className="footer__center__box-link">
                  <img
                    src={pinteres}
                    alt=""
                    className="footer__center__box-img"
                  />
                </a>
              </div>
            </div>
            <div className="footer__right">
              <h1 className="footer__right-title">Utility Pages</h1>
              <a href="" className="footer__right-link">
                Style Guide Changelog
              </a>
              <a href="" className="footer__right-link">
                404 Not Found
              </a>
              <a href="" className="footer__right-link">
                Password Protected
              </a>
              <a href="" className="footer__right-link">
                Licences
              </a>
            </div>
          </div>
          
        </div>
        <p className="footer-bottom">
          Copyright ©<h3> Organick</h3> | Designed by <h3>VictorFlow</h3>
          Templates - Powered by <h3>Webflow</h3>
        </p>
      </footer>
    </>
  );
}

export default Footer;
