import React, { Component } from "react";

import { Grid } from 'react-bootstrap';
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo"


export class Saludo extends Component {

    state = {
        nombre: this.props.nombre,
        mensaje: this.props.mensaje
    };
  

    manejarNuevoNombre = datos => {
        this.setState(datos); 


     };

    render() {

        const { nombre,mensaje } = this.state;
      


        return ( 
            < Grid >

            <MensajeSaludo nombre = { nombre } mensaje={mensaje} /> 
            <FormaSaludo alObtenerNuevoNombre = { this.manejarNuevoNombre }/>     




            </Grid>
        );
    }
}

Saludo.defaultProps = {
    nombre: "React",
    mensaje: "hola paps Bienvenido"
}

export default Saludo;