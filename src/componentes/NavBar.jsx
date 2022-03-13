import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
const navBar = () => {
  return (
    <header>
      <div className="d-flex align-items-center navUp">
        <div className="col-4">
          <Link to={"/"}>
            <img
              src={"/images/Logo.png"}
              alt="logo de fullgamer"
              className="logoHeader"
            />
          </Link>
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
            <NavLink
              to={"category/productos"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div href="">Productos</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"category/perifericos"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div href="">Perifericos</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"category/computadoras"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div href="">Computadoras de escritorio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"cuenta"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div href="">Cuenta</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
