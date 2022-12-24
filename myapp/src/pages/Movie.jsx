import {React, useEffect, useState } from 'react'
// import { ReactComponent as Logo } from '../assets/images/Logo.svg'

function Movie() {
  const [movies, showMovies]=useState([]);

  const fetchApi = () =>{
    return fetch("http://127.0.0.1:5000/jadwal/")
    .then((response)=>response.json())
    .then(x=>{
      showMovies(x)
    })
  }

  useEffect(()=>{
    fetchApi();
  },[])

  const film = movies.map(y=>{
    return (
      <li>
            <div className="movie-card">

                <figure className="card-banner">
                  <img src={y.image} alt="Sonic the Hedgehog 2 movie poster" />
                  
                </figure>

              <p>
                  <h3 className="card-title mb-0" style={{cursor: "pointer"}}>{y.teater_nama}</h3>
                </p>
              <div className="title-wrapper">

                <a href="/film/movie-details.html?fid={y.film_id}" onclick="filmdetail(id)" style={{textDecoration:"none"}}>
                  <h3 className="card-title">{y.film_judul}</h3>
                </a>

                <time datetime="2022">{y.harga}</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">{y.film_kategori}</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT122M">{y.film_durasi}</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>{y.jam}</data>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>{y.hari}</data>
                </div>

                
              </div>

            </div>
          </li>
    )
  })
  return (
    <div className='movie-parent'>
    <>
    <section className="top-rated">
        <div className="divider-upcoming"></div>
        <div className="container">

            <p className="section-subtitle">Playing Now</p>

            <h2 className="h2 section-title">Movies in Cinema</h2>

            <ul className="movies-list" id="movie-list">
            {film}
            </ul>

        </div>
    </section>
    </>
    
    </div>
  )
}

export default Movie