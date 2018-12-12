import React, { Component } from 'react';

export class MensajeSaludo extends Component {
   
    render() {
    	 const {nombre, mensaje} = this.props;
        return ( < div >
            <h1 > Hola {nombre} </h1>       
            <p > hey {mensaje} </p>

            </div>

        );
    }
}

export default MensajeSaludo;