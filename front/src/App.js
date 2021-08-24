import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"

/* Componant de page importation des fichier d'inscription */
import Inscription from "./componants/inscription"

export default class App extends Component {
  render() {
    return (
      <Router>
          <Route path='/' exact>
              <Inscription/>
          </Route>
      </Router>
    );
  }
}
