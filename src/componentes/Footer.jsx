import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="d-flex containerFooter">
        <div className="col-md-4 col-12 text-center">
          <h4 className="subtitulo">Contactenos</h4>
          <div>
            <p>
              25 de Mayo 888 <br />
              (54 11) 6708-1366 <br />
              consultasfgamer@gmail.com.ar <br />
              <a
                href="https://api.whatsapp.com/send?phone=541167081366"
                target="_blank"
              >
                <i
                  className="fa fa-whatsapp"
                  aria-hidden="true"
                  rel="nofollow"
                ></i>{" "}
                WhatsApp (+54 911 6708 1366)
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-4 col-12 ">
          <h4 className="text-center subtitulo">Seguinos en</h4>
          <div className="d-flex justify-content-center">
            <div className="d-flex containerRedes">
              <i className="fab fa-facebook fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
              <i
                className="fa fa-instagram instagram fa-2x"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 ">
          <h4 className="subtitulo text-center">Suscribite y recibí ofertas</h4>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Direccion de mail..."
              className="inputFooter"
            />
            <button className="btnFooter">
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
