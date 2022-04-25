// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const isPar = props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>
    return (
        <div>
            {isPar}  
        </div>
    )
}
