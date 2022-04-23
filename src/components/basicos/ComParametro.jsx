export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'aprovado' : 'em recuperação'
    const notaInt = Math.ceil(props.nota) //propriedades sao somente leitura
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                {props.aluno} tem nota { notaInt } estando {status}
            </p>
        </div>
    )
}