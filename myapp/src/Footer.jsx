import React from 'react';
import { ReactComponent as Logo } from './assets/images/Logo.svg'

function Footer() {
  return (
    <div className='footer-parent'>
        <footer class="footer" />

<div class="footer-top">
  <div class="container">

    <div class="footer-brand-wrapper">

      <a href="./index.html" class="logo">
        <Logo />
      </a>

      <ul class="footer-list">

        <li>
          <a href="/" class="quicklink-link">Faq</a>
        </li>

        <li>
          <a href="/" class="quicklink-link">Help center</a>
        </li>

        <li>
          <a href="/" class="quicklink-link">Terms of use</a>
        </li>

        <li>
          <a href="/" class="quicklink-link">Privacy</a>
        </li>

      </ul>

    </div>

    <div class="divider"></div>

    <div class="quicklink-wrapper">

      <ul class="quicklink-list">
      
        <ul class="social-list">

          <li>
            <a href="/" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/" class="social-link">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

      </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">
    <img src={require("./assets/images/footer-bottom-img.png")} alt="Online banking companies logo" className='footer-bottom-img' />
  </div>
</div>

{/* <!-- TOP UP Modal -->
  <!-- The Modal --> */}
  <div id="myModaltopup" class="modala" style={{display: "none"}}>

    {/* <!-- Modal content --> */}
    <div class="modala-content">
      <span class="close">&times;</span>

          <form>
          <div class="form-group mt-2">
            <label for="exampleInputPassword1">Top Up Ammount</label>
            <input type="number" class="form-control" id="ammount" placeholder="Ammount" />
          </div>
          <button onclick="topup()" id="btn-ticket" type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>

  </div>


    </div>
  )
}

export default Footer