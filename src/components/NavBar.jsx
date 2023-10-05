import CartWidget from './CartWidget'; 
import React from 'react';

export const NavBar = () => {
    return ( 
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Twelfth navbar example">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">"Mi marca"</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <a className="nav-link" href="#">
        <CartWidget />
        </a>
      </ul>
    </div>
  </div>
</nav> 
    );
}

export default NavBar;