import { useParams } from "react-router-dom" 
import { Spin, Button } from "antd"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/client"
import "./styleModule.css" 
import { useContext } from "react";
import { dataContext } from "../context/context";

const Detalle = () => {
    const {id} = useParams ()
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([])

    useEffect(() => {
        const productRef= doc(db, "products", id)
        getDoc(productRef)
        .then(snapshot => {
            if(snapshot.exists()){
                setProducto(
                    {
                        id: snapshot.id, ...snapshot.data()
                    }
                )
            }
        })
        .catch(error => console.error(error))
        .finally(setLoading(false))
    },[id])
    
    const [contador, setContador] = useState(1)
    const stock = 20 

    const suma = () => { 
        contador <= stock && setContador(contador + 1)
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1)
    }

    const { cart, setCart } = useContext(dataContext)

    const añadirAlCarrito = () =>{
        setCart([
            ...cart,
            {...producto, cantidad:contador}
          ])
        setTimeout(()=>{
            setContador(1)
            console.log(cart)
        }, 1500)
    }

    return (
        <div>
        {loading ? (<Spin />) : (
            <div className="styleDiv1" key= { producto.id }>
                <h1>{ producto.title }</h1>
                <div className="styleDiv2">
                    <div className="styleDiv3" ><img className="styleImg" src={ producto.image } alt="imagen del producto" /></div>
                    <div className="styleDiv4" >
                        <div className="styleDiv5" >
                            <p style={ {fontSize: 25} }>Descripcion: { producto.description }</p>
                            <button onClick={suma}>+</button>
                            <p>{contador}</p>
                            <button onClick={resta}>-</button>
                            <Button onClick={añadirAlCarrito}>Añadir al carrito</Button>
                            <p style={ {fontSize: 20, paddingTop: 20} }> Categoria: { producto.categoryId }</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default Detalle

