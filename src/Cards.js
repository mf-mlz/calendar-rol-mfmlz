import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="container full-height full-width d-flex justify-content-center align-items-center my-2">
      <div className="row">
        {/* Bienvenida */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://th.bing.com/th/id/OIP.m6vzaShuVPrmneOtKXGnDQHaEA?rs=1&pid=ImgDetMain"
              className="card-img-top"
              alt="Bienvenida"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Rol de Bienvenida</h5>
              <Link to="/roles/rolesb" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>
        
        {/* Intercesión */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://th.bing.com/th/id/R.e7354efbc9b19c6f885a892b9c52da34?rik=MwPWMyU0i0Sr2g&pid=ImgRaw&r=0"
              className="card-img-top"
              alt="Oración"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Rol de Intercesión</h5>
              <Link to="/roles/roleso" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>

        {/* Limpieza */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://th.bing.com/th/id/OIP.ibiB5TmHPurYz783Q6QWNgAAAA?rs=1&pid=ImgDetMain"
              className="card-img-top"
              alt="Limpieza"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Rol de Limpieza</h5>
              <Link to="/roles/rolesl" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>

        {/* Niños */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://th.bing.com/th/id/OIP.QmGUcQUKfg3VKxwQ7O1hsAHaFh?rs=1&pid=ImgDetMain"
              className="card-img-top"
              alt="Niños"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Rol de Niños</h5>
              <Link to="/roles/rolesn" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>

        {/* Santa Cena */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://i.ytimg.com/vi/gbSPrzi3wCk/maxresdefault.jpg"
              className="card-img-top"
              alt="Santa Cena"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Rol de Santa Cena</h5>
              <Link to="/roles/rolessc" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>

        {/* Cumpleaños */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://editorialtelevisa.brightspotcdn.com/dims4/default/7c346bc/2147483647/strip/true/crop/700x700+250+0/resize/1000x1000!/quality/90/?url=https:%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F46%2F50%2Fc0d629b94bdd85e6ca9ecc65316f%2Fpastel-de-cumpleanos.jpg"
              className="card-img-top"
              alt="Cumpleaños"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Cumpleaños</h5>
              <Link to="/roles/birthdays" className="btn btn-dark">
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>

        {/* Reportes Financieros */}
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-2">
          <div className="card border border-dark" style={{ width: "18rem" }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/032/321/129/original/financial-report-illustration-with-data-charts-graphs-and-diagrams-on-finance-transaction-analysis-and-statistic-online-in-flat-background-vector.jpg"
              className="card-img-top"
              alt="ReporteFinanciero"
              style={{ maxHeight: "160px", minHeight: "160px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Reporte Financiero</h5>
              <Link to="/reportes" className="btn btn-dark">
                Ver Reporte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
