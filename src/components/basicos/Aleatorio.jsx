// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max-min)) + min
    return (
        
           <div>
               <p>O número minimo é {min}</p>
               <p>O número maximo é {max}</p>
               <p>O número escolhido é {aleatorio}</p>
           </div>
    )
}
 