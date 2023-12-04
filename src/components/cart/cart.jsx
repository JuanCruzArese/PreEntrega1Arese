import { useContext, useState } from "react";
import { dataContext } from "../context/context";
import CartElement from "./cartElements";
import { Button } from "antd"
import { db } from "../../firebase/client";
import { addDoc, collection } from "firebase/firestore";

const Cart = () => {
    const { cart } = useContext(dataContext);
    

    const [dataFormulario, setDataFormulario] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const seteoDeData = (e) => {
        const { name, value } = e.target 
        setDataFormulario({
            ...dataFormulario,
            [name]: value
        })
    }

    const realizarOrden =  (e) => {
        e.preventDefault();
        
        const total = cart.reduce((total, producto) => total + (producto.cantidad*producto.price), 0); 

        const order = {
            buyer: dataFormulario,
            items: cart,
            total: total,
        }
        const refOrder = collection(db, "orders")

        addDoc(refOrder, order).then(({id}) => alert(`Felizidades realizaste tu orden de compra de forma extiosa estes es tu numero de order: ${id}`))

        setDataFormulario({
            nombre: '',
            email: '',
            telefono: ''
          });
    }


    let styleDiv1 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
    return (
        <div style={styleDiv1}>
            <h1>Carrito</h1>
           <div>
                <h2>Detalle de la compra</h2>
                {cart.map((producto,index)=>(<CartElement key={index} producto={producto}/>))}
           </div>
           <div>
                <h2>Formulario de compra</h2>
                <div>
                    <form onSubmit={realizarOrden}>
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" value={dataFormulario.nombre} onChange={seteoDeData} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={dataFormulario.email} onChange={seteoDeData} />
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono:</label>
                            <input type="text" id="telefono" name="telefono" value={dataFormulario.telefono} onChange={seteoDeData} />
                        </div>
                        <button type="submit">Realizar compra</button>
                    </form>
                </div>

           </div>    
        </div>
    )
}

export default Cart