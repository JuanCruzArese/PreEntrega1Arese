import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/context";
import { Button } from "antd"

const CartElement = ({producto}) =>{
    const { reducirCantidad, aumentarCantidad } = useContext(dataContext);
    const [cantidad, setCantidad] = useState(producto.cantidad);
    const precio = (producto.price*producto.cantidad) 


    const aumentarCantidad2 = () => {
        aumentarCantidad(producto.id);
        setCantidad(cantidad + 1);
    };

    const reducirCantidad2 = () => {
        reducirCantidad(producto.id);
        setCantidad(cantidad - 1 > 0 ? cantidad - 1 : 0);
    };
    
let styleDiv1 = {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20
}
let styleImg = {
    width: 60,
    height: 60
}

    return (
            <div style={styleDiv1}>
                <img style={styleImg} src={producto.image} alt="producto-imagen" />
                <h2>{producto.name}</h2>
                <Button onClick={aumentarCantidad2}>+</Button>
                <h3>cantidad: {producto.cantidad}</h3>
                <Button onClick={reducirCantidad2}>-</Button>
                <h4>precio: {precio}$ </h4>
            </div>
        )
}

export default CartElement