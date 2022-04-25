// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
                <input 
                    id="passoInput" 
                    type="number" 
                    value={props.passo}
                    /*onChange={props.setPasso}*/
                    onChange={e => props.setPasso(+e.target.value)}
                />
                {/*<button onClick={_ => this.inc()}>Incrementar</button>*/}
                {/*<button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>*/}
        </div>
    )
}