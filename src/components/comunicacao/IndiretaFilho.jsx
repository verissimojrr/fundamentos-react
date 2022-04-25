// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.quandoClicar
    const nomes = ['Lucas', 'Augusto', 'Cesar']
    const gerarNome = () => nomes[parseInt(Math.random() * 3 - 0) + 0]
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * max-min) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb(gerarNome(), gerarIdade(), gerarNerd())}>
                Fornecer informações
            </button>
        </div>
    )
}