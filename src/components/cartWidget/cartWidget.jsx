import { Avatar, Badge} from 'antd';
import {ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { dataContext } from "../context/context";

const CartWidget = () => {
    const { cart } = useContext(dataContext);
    const cantidad = cart.reduce((total, producto) => total + producto.cantidad, 0); 
    
    return (
        <>
        <Badge count={cantidad} overflowCount={99}>
        <Link to={"/Cart"} ><Avatar shape="square" size="large" icon={<ShoppingCartOutlined />}/></Link>
        </Badge>
        </>
    )
}

export default CartWidget