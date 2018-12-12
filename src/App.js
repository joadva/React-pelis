import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from "react-router-dom/Route";
import {Saludo} from './Saludo.js';

export class App extends Component {


    render() {
        return (
            <Router>
            < Saludo />
            </Router>


            );
        }
}
export default App;