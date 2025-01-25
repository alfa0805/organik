import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import shop from "../../assets/shop.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <div className="header__left__logo">
            <img src={logo} alt="" className="header__left__logo-img" />
            <h2 className="header__left__logo-title">Organick</h2>
          </div>
          <nav className="header__left__nav">
            <a href="#" className="header__left__nav-link">
              Home
            </a>
            <a href="#" className="header__left__nav-link">
              About
            </a>
            <select name="" id="" className="header__left__nav-select">
              <option value="Pages">Pages</option>
              <option value="Pages">Pages</option>
              <option value="Pages">Pages</option>
            </select>
            <a href="#" className="header__left__nav-link">
              Shop
            </a>
            <a href="#" className="header__left__nav-link">
              Project
            </a>
            <a href="#" className="header__left__nav-link">
              News
            </a>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__right__search">
            <input type="text" className="header__right__search-input" />
            <img src={search} alt="" className="header__right__search-img" />
          </div>
          <div className="header__right__shop">
            <img src={shop} alt="" className="header__right__shop-img" />
            <p className="header__right__shop-text">Cart (0)</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
