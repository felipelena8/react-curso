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
            <div href="">Productos</div>
          </li>
          <li className="nav-item">
            <div href="">Perifericos</div>
          </li>
          <li className="nav-item">
            <div href="">Computadoras de escritorio</div>
          </li>
          <li className="nav-item">
            <div href="">Cuenta</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
