import React from 'react';
import Categorias from "../categorias/categorias";
import Item from '../item/item';
import { useState, useEffect } from 'react';
import { db } from "../../firebase/client";
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom" 


const ItemListContainers = () => {
   const [productos,setProductos] = useState([])
   const { categoria } = useParams()

   useEffect (() => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
    .then(snapshot => {
        const productosData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        if (categoria) {
            const productosFiltrados = productosData.filter(producto => producto.categoryId === categoria);
            setProductos(productosFiltrados);
        } else {
            setProductos(productosData);
        }
    })
    .catch(e => console.error(e))
    },[categoria])

    let div1 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
    };

    let div2 = {
        display: 'flex',
        width: '100%'
    };

    let h2_1 = {
        margin: 0
    };

    let div3 = {
        marginLeft: 'auto',
        padding: '20px'
    };

    let div4 = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    };

    return (
        <>
            <div>
                <div style={div1}>
                    <div style={div4}>
                        <h2 style={h2_1}>Productos</h2>
                    </div>
                    <div style={div2}>
                        <div style={div3}><Categorias /></div>
                    </div>
                </div>
                <div style={div4}>
                {productos.map((producto, index) =>(<Item key={index}producto={producto}/>))}
                </div>
            </div>
        </>
    );
};

export default ItemListContainers
