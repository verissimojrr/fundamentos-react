import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome='Vitor' idade={20} nerd={true}/>
            <DiretaFilho nome='Gabriel' idade={17} nerd={false}/>
        </div>
    )
}