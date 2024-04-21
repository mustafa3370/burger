import {  useState } from "react";
import logo from '../../photos/logo.png'
import './style.css'
function Header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className="flex ">
      {/* hamburger */}
      <label
        onClick={function () {
          setshowModel(true);
        }}
        class="hamburger"
      >
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            class="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {/* endhamburger */}
      <div />
      <div><img src={logo} alt="" className ='logo' /></div>
      <nav>
        <ul className="flex">
      
          <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Shop
          </li>
          <li>
            <a href=""></a>Menu
          </li>
          
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Contact
          </li>
        </ul>
      </nav>
      {/* burgerlist */}
      {showModel && (
        <div className="fixed">
            
          <ul className="model">
            
            <li>
              <button
                class="button"
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <span class="X"></span>
                <span class="Y"></span>
              </button>
            </li>
            <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Shop
          </li>
          <li>
            <a href=""></a>Menu
          </li>
          
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Contact
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
