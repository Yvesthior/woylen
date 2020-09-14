import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <header className="">
        <div className="container">
          <div className="row d-flex">
            <div className="offset-4 offset-md-7 offset-lg-8 d-flex mt-1 justify-content-center">
              <div className="col-7">
                {" "}
                <i className="fa fa-sign-in" aria-hidden="true"></i> Se
                Connecter
              </div>
              <div className="col-8">
                {" "}
                <i className="fas fa-user-plus"></i> S'inscrire
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex col-12">
              <div className="col-4">
                {" "}
                <h2>WOYLEN</h2>
              </div>
              <div className="col-9">
                <form class="form-inline col-12">
                  <input
                    className="form-control col-10 col-md-8 col-lg-8"
                    type="search"
                    placeholder="Je cherche une partition"
                    aria-label="Search"
                  />
                  <button className="btn btn-success col-2 " type="submit">
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
        <div className="container mt-4 d-flex">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 justify-content-space-around">
              <ul className="d-flex ">
                <Link to="/" className="col navLink">
                  <li className="m-acceuil">Acceuil</li>
                </Link>
                <Link to="/categories" className="col navLink">
                  <li className="m-acceuil">Catégories</li>
                </Link>
                <Link to="/parametres" className="col navLink">
                  <li className="m-infos">Paramètres</li>
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
