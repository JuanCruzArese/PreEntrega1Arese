import { useEffect, useState } from "react"
import { AutoComplete, Spin } from 'antd'
import React from 'react';
import ProductosGrid from "../productsGrid/productsGrid";
import { useParams } from "react-router-dom";
import Categorias from "../categorias/categorias";


const ItemListContainers = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    const {categoria} = useParams ()

    const url = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(url)
            .then(res=>res.json())
            .then((json) => {
                setProductos(json);
                setLoading(false);
              })
            .catch(error => console.error(error))
    }, [categoria])

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
                    {loading ? (
                        <Spin />
                    ) : (
                        <ProductosGrid productos={productos} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemListContainers