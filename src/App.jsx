import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

import './App.css'
const tag = <strong>Olá, React!!</strong>


// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#07 - TabelaProdutos" color='#2e0ca8'>
                <TabelaProdutos/>
            </Card>
            <Card titulo="#06 - ListaAlunos" color='#f1720a'>
                <ListaAlunos/>
            </Card>
            <Card titulo="#05 - Familia" color='#9dc936'>
                <Familia sobrenome='Verissimo'>
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>
            <Card titulo="#04 - Aleatorio" color='#8e44ad'>
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento" color='#DAF7A6'>
                <Fragmento/>
            </Card>
            <Card titulo="#02 - Com Parametro" color='#82e0aa'>
                <ComParametro titulo='Situação do aluno' aluno="Pedro" nota={9.3}/>
            </Card>
            <Card titulo="#01 - Primeiro" color='#bfc9ca'>
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="Olá" color='#f1948a'>
                {tag}
            </Card>
        </div>     
    </div>

/*
export default function App() {
    return (
        <div>
                <h1>Fundamentos React</h1>
                {tag}<p></p>
                <Aleatorio min={1} max={60}/>
                <Fragmento/>
                <ComParametro titulo='Situação do aluno' aluno="Pedro" nota={9.3}/>
                <Primeiro></Primeiro>
            </div>
            )
} 
*/   
    