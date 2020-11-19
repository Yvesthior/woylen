import React from "react";

export default function EtapesCelebration({ categories }) {
  return (
    <div className="col s4 etape-btn">
      {" "}
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        <i className="material-icons left">list</i>
        Étapes de la Célébration
      </a>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4> Étapes de la célébration : </h4>
          <div className="row col s12 elements-etape">
            {categories.map((categorie) => {
              return (
                <div
                  key={categorie.id}
                  className="waves-effect waves-light btn col s3 etapes-opt-btn"
                >
                  <i className="material-icons left">chevron_right</i>
                  {categorie.nom}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )