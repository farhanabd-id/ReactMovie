import React from 'react'
import { ReactComponent as Logo } from './assets/images/Logo.svg';

function Navbar({ showtopup }) {
  return (
    <div className='parent'>
      <header className="header" data-header>
        <div className="container">

          <div className="overlay" data-overlay></div>

          <a href="/" className="logo">
            <Logo />
          </a>

          <div className="header-actions">

            <a className="repeat-btn" type="button" href="/film/updateuser.html">
              <ion-icon name="repeat-outline"></ion-icon>
            </a>

            <div className="lang-wrapper">
              <label for="language">
                <ion-icon name="person-circle-outline"></ion-icon>
              </label>

              <select name="language" id="language">
                <option id="user-topup" value="">Nama</option>
                <option id="user-saldo" value="">Saldo</option>
              </select>
            </div>

            <button onclick="logout()" id="btn" className="btn btn-primary">Log Out</button>

          </div>

          <button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>

            <div className="navbar-top">

              <a href="/" className="logo">
                <Logo />
              </a>

              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

            </div>

            <ul className="navbar-list">

              <li>
                <a href="/" className="navbar-link">Home</a>
              </li>

              <li>
                <a href="/movie" className="navbar-link" onclick="movie()">Movie</a>
              </li>

              <li>
                <button id="myBtn" href="/" onClick={() => showtopup()} className="navbar-link">top up</button>
              </li>

            </ul>

            <ul className="navbar-social-list">

              <li>
                <a href="/" className="navbar-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className="navbar-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className="navbar-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className="navbar-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className="navbar-social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>

            </ul>

          </nav>

        </div>

        <div id="wrap">
          <form id="nav-search" className="form-search" role="search">
            <input list="browsers" oninput="auto()" onkeyup="myFunction()" id="myInput" className="search-input" type="text" placeholder="Search Film" />
            <a href="/" className="icon" id="search-btn" > </a>
            <datalist id="browsers">

            </datalist>
          </form>


        </div>

      </header>
    </div>
  )
}

export default Navbar