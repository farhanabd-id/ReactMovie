import React from "react";
// import { ReactComponent as Logo } from './assets/images/Logo.svg';

function Home() {
    return (
      <div className="parent">

  <main>
  <article> 

<section class="hero">
  <div class="container">
    <div class="grid-container">
      <div class="grid-item">
        <div class="hero-content">

          <p class="hero-subtitle">Filmlane</p>

          <h1 class="h1 hero-title">
            Now <strong>Showing</strong>, In, Cinemas.
          </h1>

            <button onclick="buymovie()" class="btn btn-primary">
              <ion-icon name="film"></ion-icon>

            <span>Buy Ticket</span>
          </button>

        </div>
      </div>

      
    </div>


  </div>
</section>





</article>
  </main>
      </div>
         
    )
}

export default Home;