import React from "react";
import CartWidget from "./CartWidget";
const navBar = () => {
  return (
    <header>
      <div className="d-flex align-items-center navUp">
        <div className="col-4">
          <img
            src={"/images/Logo.png"}
            alt="logo de fullgamer"
            className="logoHeader"
          />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <input type="text" name="" className="inputSearch" maxLength="45" />
          <button className="btnSearch">Buscar</button>
        </div>
        <div className="col-4">
          <CartWidget />
        </div>
      </div>
      <nav className="navbar-expand-md">
        <ul className="collapse navbar-collapse nav-container">
          <li className="nav-item">
            <a href="">Productos</a>
          </li>
          <li className="nav-item">
            <a href="">Perifericos</a>
          </li>
          <li className="nav-item">
            <a href="">Computadoras de escritorio</a>
          </li>
          <li className="nav-item">
            <a href="">Cuenta</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
