/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div className="container">
      {/* HOME, SHEET MUSIC SHOWING ALL */}
      <h2>Partitions présentes dans notre plateforme</h2>

      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-6 col-12 mt-3">
          <div className="data-container p-3">
            <h5
              className="text-center mb-3 p-2"
              id="celebrationCollapse"
              data-toggle="collapse"
              data-target="#collapseNav"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {" "}
              Étapes de la Célébration
            </h5>
            <div className="collapse" id="collapseNav">
              <div class="list-group list-group-flush" id="menu-items">
                <a
                  href="/"
                  class="list-group-item list-group-item-action active"
                >
                  Entrée
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Préparation Pénitentielle
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Gloire à Dieu
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Psaume
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Acclamation de l'Évangile
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Profession de Foi
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Prière Universelle
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Offertoire
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Santus
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Agnus Dei
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Communion
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Action de Grâces
                </a>
                <a href="/" class="list-group-item list-group-item-action">
                  Sortie
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-8 col-sm-6 col-6">
          {/* Content Section */}
          <section>
            <div className="content-wrapper">
              <div className="row">
                {/* one Element beginning */}
                <div className="col-md-12 col-lg-12 col-sm-12 col-12 mt-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Partition</h5>
                      <p class="card-text">Titre de la Partition.</p>
                      <p class="card-text">Auteur de la Partition.</p>
                      <p class="card-text">Catégorie de la Partition.</p>
                      <Link to="/partitions/:id" class="btn btn-primary">
                        Consulter
                      </Link>
                    </div>
                    <div className="card-footer">
                      <p>publication : 2019</p>
                    </div>
                  </div>
                </div>
                {/* one Element ending */}
              </div>
            </div>

            {/* PAGINATION SECTION */}
            <section className="row d-flex justify-content-center mt-4 mb-2">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="/" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            {/* PAGINATION SECTION ENDING */}
          </section>
          {/* HOME, SHEET MUSIC SHOWING ALL  ENDING*/}
        </div>
        {/* Content Section END */}
      </div>
    </div>
  );
}

export default Acceuil;
