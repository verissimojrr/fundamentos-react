import { cloneElement } from "react";
//import FamiliaMembro from "./FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            {/*<FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome='Silva'/>*/}
            {
                props.children.map(
                    (child, i) => {
                        return cloneElement(child, {...props, key: i})
                    }
                )
            }
        </div>
    )
}