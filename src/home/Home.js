import React, { Component } from "react";
import axios from "axios";
// import { render } from "@testing-library/react";
// import "./Home.css";

class Home extends Component {
  state = { celebrations: [] };
  async componentDidMount() {
    const celebrations = await axios
      .get("https://woylen.herokuapp.com/celebrations")
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error.message));
    this.setState({ celebrations });
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="check" />
        {/*header area start*/}
        <header>
          <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn" />
          </label>
          <div className="left_area">
            <h3>
              WOY<span>LEN</span>
            </h3>
          </div>
          <div className="right_area">
            <a href="/" className="logout_btn">
              Déconnexion
            </a>
          </div>
        </header>
        {/*header area end*/}
        {/*mobile navigation bar start*/}
        <div className="mobile_nav">
          <div className="nav_bar">
            <img src="1.png" className="mobile_profile_image" alt="" />
            <i className="fa fa-bars nav_btn" />
          </div>
          <div className="mobile_nav_items">
            <a href="/">
              <i className="fas fa-desktop" />
              <span>Acceuil</span>
            </a>
            <a href="/">
              <i className="fas fa-cogs" />
              <span>Components</span>
            </a>
            <a href="/">
              <i className="fas fa-table" />
              <span>Tables</span>
            </a>
            <a href="/">
              <i className="fas fa-th" />
              <span>Contacter l'équipe</span>
            </a>
            <a href="/">
              <i className="fas fa-info-circle" />
              <span>A Propos</span>
            </a>
            <a href="/">
              <i className="fas fa-sliders-h" />
              <span>Réglages</span>
            </a>
          </div>
        </div>
        {/*mobile navigation bar end*/}
        {/*sidebar start*/}
        <div className="sidebar">
          <div className="profile_info">
            <img src="1.png" className="profile_image" alt="" />
            <h4>Jessica</h4>
          </div>
          <a href="/">
            <i className="fas fa-desktop" />
            <span>Acceuil</span>
          </a>

          <a href="/" className="dropdown-trigger" data-target="dropdown1">
            <i className="fas fa-cogs" />
            <span>Célébrations</span>
          </a>

          <ul id="dropdown1" className="dropdown-content">
            <li>
              <span>X Fermer</span>
            </li>
            {this.state.celebrations.map((celebration) => {
              return (
                <li key={celebration.id}>
                  <a href="#!">{celebration.nom}</a>
                </li>
              );
            })}
          </ul>

          <a href="/">
            <i className="fas fa-th" />
            <span>Contacter l'équipe</span>
          </a>
          <a href="/">
            <i className="fas fa-info-circle" />
            <span>A Propos</span>
          </a>
          <a href="/">
            <i className="fas fa-sliders-h" />
            <span>Réglages</span>
          </a>
        </div>
        {/*sidebar end*/}
        <div className="content">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s2">
                  <a href="#entree">Entrée</a>
                </li>
                <li className="tab col s2">
                  <a className="active" href="#kyrie">
                    Kyrie
                  </a>
                </li>
                <li className="tab col s2">
                  <a href="#gloria">Gloire a Dieu</a>
                </li>
                <li className="tab col s2">
                  <a href="#psaume">Psaume</a>
                </li>
                <li className="tab col s2">
                  <a href="#acclamation">Acclamation</a>
                </li>
                <li className="tab col s2">
                  <a href="#pu">Prière Universelle</a>
                </li>
                <li className="tab col s2">
                  <a href="#offertoire">Offertoire</a>
                </li>
                <li className="tab col s2">
                  <a href="#sanctus">Sanctus</a>
                </li>
                <li className="tab col s2">
                  <a href="#agnus">Agnus</a>
                </li>
                <li className="tab col s2">
                  <a href="#communion">Communion</a>
                </li>
                <li className="tab col s2">
                  <a href="#actiondegrace">Action de Grâces</a>
                </li>
                <li className="tab col s2">
                  <a href="#sortie">Sortie</a>
                </li>
              </ul>
            </div>
            <div id="entree" className="col s12">
              Cantiques d'Entrée
            </div>
            <div id="kyrie" className="col s12">
              Cantiques kyrie
            </div>
            <div id="gloria" className="col s12">
              Cantiques Gloria
            </div>
            <div id="psaume" className="col s12">
              Cantiques Psaumes
            </div>
            <div id="acclamation" className="col s12">
              Cantiques Acclamation
            </div>
            <div id="pu" className="col s12">
              Cantiques Priere Universelle
            </div>
            <div id="offertoire" className="col s12">
              Cantiques Offertoire
            </div>
            <div id="sanctus" className="col s12">
              Cantiques Sanctus
            </div>
            <div id="agnus" className="col s12">
              Cantiques Agnus
            </div>
            <div id="communion" className="col s12">
              Cantiques Communion
            </div>
            <div id="actiondegrace" className="col s12">
              Cantiques Action de Graces
            </div>
            <div id="sortie" className="col s12">
              Cantiques Sortie
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
