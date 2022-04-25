import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/repeticao/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
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
            <Card titulo="#12 - Contador" color='#63cae9'>
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="#11 - Componente controlado [Input]" color='#cc0707'>
                <Input/>
            </Card>
            <Card titulo="#10 - IndiretaPai" color='#f9fc49'>
                <IndiretaPai/>
            </Card>
            <Card titulo="#09 - DiretaPai" color='#88d69f'>
                <DiretaPai/>
            </Card>
            <Card titulo="#08 - ParOuImpar" color='#d688bf'>
                <ParOuImpar numero={18}/>
                <UsuarioInfo usuario={{nome:"José"}}/>
                {/*<UsuarioInfo usuario={{email:"@gmail.com"}}/>*/}
            </Card>
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
    