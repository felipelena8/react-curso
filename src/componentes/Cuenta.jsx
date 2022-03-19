import React from "react";

export default function Cuenta() {
  // Divs con facturas, domicilios, mis cuentas, preguntas, ultima compra etc...
  return (
    <div className="container-fluid container-account">
      <h4>Mi cuenta</h4>
      <div className="container-cards">
        <div className="account-card">
          <p className="tittle-card">Mis facturas</p>
        </div>
        <div className="account-card">
          <p className="tittle-card">Mis domicilios</p>
        </div>
        <div className="account-card">
          <p className="tittle-card">Mis preguntas</p>
        </div>
        <div className="account-card">
          <p className="tittle-card">Ultima compra</p>
        </div>
        <div className="account-card">
          <p className="tittle-card">Mis facturas</p>
        </div>
        <div className="account-card">
          <p className="tittle-card">Mis facturas</p>
        </div>
      </div>
    </div>
  );
}
