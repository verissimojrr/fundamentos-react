import If,{Else} from "./If"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*<If test={usuario && usuario.nome}>
                Seja bem vindo, <strong>{usuario.nome}!!</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo, <strong>Meu patrão!!</strong>
            </If>*/}
            <If test={usuario && usuario.nome}>
                Seja bem vindo, <strong>{usuario.nome}!!</strong>
                <Else>
                    Seja bem vindo, <strong>Meu patrão!!</strong>
                </Else>
            </If>

        </div>
    )
}