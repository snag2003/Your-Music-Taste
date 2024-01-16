import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Tu Spotify</h1>
      <div className="navbar__menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navbar__menu-span"></span>
        <span className="navbar__menu-span"></span>
        <span className="navbar__menu-span"></span>
      </div>
      <ul className={`navbar__items ${menuOpen ? "open" : ""}`}>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/search">
            Buscador
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/top-artists">
            Top Artistas
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/top-songs">
            Top Canciones
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/your-playlists">
            Tus Playlists
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__item-link" to="/about-creator">
            Sobre el Creador
          </NavLink>
        </li>
        <li className="navbar__item" onClick={onLogout}>
          <NavLink className="navbar__item-link navbar__item-logout" to="/">
            Cerrar Sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
