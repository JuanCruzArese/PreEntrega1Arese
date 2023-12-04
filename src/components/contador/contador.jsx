import { Button } from "antd";
import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(1)
    const stock = 20 

    const suma = () => { 
        contador <= stock && setContador(contador + 1)
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1)
    }

    return (
        <div style={ {display:'flex'} }>
            <Button onClick={ suma }>+</Button>
            <p>{contador}</p>
            <Button onClick={ resta }>-</Button>
        </div>
    )
}
export default Contador