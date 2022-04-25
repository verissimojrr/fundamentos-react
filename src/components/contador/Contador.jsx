import { Component } from "react";
import './Contador.css'

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {

    state = {
        //numero: 0
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    /*constructor (props) {
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
    }*/

    /*inc() {
        this.setState({
            numero: this.state.numero + 1
        })
    }*/

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    /*setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }*/

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                {/*<p>Valor inicial: {this.props.numeroInicial}</p>*/}
                {/*<h3>{this.state.numero}</h3>*/}
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Contador