import React, { Component } from "react";
import axios from "axios";
import EtapesCelebration from "../components/EtapesCelebration.js";
// import { render } from "@testing-library/react";
// import "./Home.css";

class Home extends Component {
  state = { celebrations: [], categories: [] };
  async componentDidMount() {
    const celebrations = await axios
      .get("https://woylen.herokuapp.com/celebrations")
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error.message));
    const categories = await axios
      .get("https://woylen.herokuapp.com/categories")
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
    this.setState({ celebrations, categories });
  }

  render() {
    console.log(this.state.categories);
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
          <div className="row white container">
            <div className="col s12">
              <EtapesCelebration categories={this.state.categories} />
              <div className="col s8">
                <div className="col s8">
                  <div className="input-field">
                    <input id="partition" type="text" className="validate" />
                    <label htmlFor="partition">Rechercher une Partition</label>
                  </div>
                </div>
                <div className="col s4 search-btn">
                  <div className="waves-effect waves-light btn">
                    <i className="material-icons left">search</i>Rechercher
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h2>Contenu Main de l'application</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
