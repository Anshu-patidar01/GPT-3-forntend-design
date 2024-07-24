import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo (2).svg";

const Menu = () => (
  <>
    <p className="gpt3__menu-links">
      <a href="#home">Home</a>
    </p>
    <p className="gpt3__menu-links">
      <a href="#wgpt3">What is GPT3</a>
    </p>
    <p className="gpt3__menu-links">
      <a href="#possibility">Open Ai</a>
    </p>
    <p className="gpt3__menu-links">
      <a href="#features">Case Studies</a>
    </p>
    <p className="gpt3__menu-links">
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggelMenu, setToggelMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {/* Given belove code is java code that's why writen in parenthesise */}

        {toggelMenu ? (
          // RiCloseLine is used for the icon of closing like "X" provieded from react-icon/ri

          <RiCloseLine
            color="#fff"
            size={40}
            onClick={() => setToggelMenu(false)}
          />
        ) : (
          //RiMenu3Line is for the 3 lines menu icon also provided by the react-icon/ri
          <RiMenu3Line
            color="#fff"
            size={35}
            onClick={() => setToggelMenu(true)}
          />
        )}
        {toggelMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-linkes-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
