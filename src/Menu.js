import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <header className="">
        <div className="container">
          <div className="row bg-light">
            <div className="col-md-12 col-lg-12 col-sm-12 d-flex mt-1">
              <div className="col-2 p-1">
                {" "}
                <i className="fa fa-sign-in" aria-hidden="true"></i> Se
                Connecter
              </div>
              <div className="col-2 p-1">
                {" "}
                <i className="fas fa-user-plus"></i> S'inscrire
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
              <div className="col-3">
                {" "}
                <h1>WOYLEN</h1>
              </div>
              <div className="col-7">
                <form class="form-inline col-12 my-2">
                  <input
                    className="form-control mr-sm-2 col-10"
                    type="search"
                    placeholder="Je cherche une partition"
                    aria-label="Search"
                  />
                  <button className="btn btn-success" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MENU SECTION BEGINNING */}
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="d-flex">
                <Link to="/" className="col navLink">
                  <li className="m-acceuil">Acceuil</li>
                </Link>
                <Link to="/catalogue" className="col navLink">
                  <li className="m-catalogue">Catalogue</li>
                </Link>
                <Link to="/messe" className="col navLink">
                  <li className="m-messe">Messe</li>
                </Link>
                <Link to="/mariage" className="col navLink">
                  <li className="m-mariage">Mariage</li>
                </Link>
                <Link to="/bapteme" className="col">
                  <li className="m-bapteme">Baptème</li>
                </Link>
                <Link to="/funerailles" className="col">
                  <li className="m-funerailles">Funérailles</li>
                </Link>
                <Link to="/infos" className="col">
                  <li className="m-infos">Infos</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION ENDING */}
    </div>
  );
};

export default Menu;
