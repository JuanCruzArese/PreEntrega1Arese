import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    

    const reducirCantidad = (productoId) => {
        const actCart = cart.map(item => {
            if(item.id === productoId){
                const actualizarCantidad = item.cantidad > 0 ? item.cantidad - 1 : 0;
                return {
                    ...item, cantidad: actualizarCantidad
                };
            }
            return item;
        }).filter(item => item.cantidad > 0);
        setCart(actCart)
    }
    const aumentarCantidad = (productoId) => {
        const actCart = cart.map(item => {
            if (item.id ===productoId) {
                return {
                    ...item,
                    cantidad: item.cantidad +1
                };
            }
            return item;
        })
        setCart(actCart)
    }

    return <dataContext.Provider value={{ cart, setCart, reducirCantidad, aumentarCantidad}}>{children}</dataContext.Provider>;
}

export default DataProvider;