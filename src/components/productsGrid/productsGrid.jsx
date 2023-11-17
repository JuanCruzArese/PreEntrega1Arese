import React from 'react';
import Item from '../item/item';

const ProductsGrid = ({productos}) => {
    if (!productos) {
        return null;
      }
    
    const filas = [];
    const productosPorFila = 4;

    for (let i = 0; i < productos.length; i += productosPorFila) {
        const fila = productos.slice(i, i + productosPorFila);
        filas.push(fila);
      }

    return (
        <div>
            {filas.map((fila, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {fila.map((producto) => (
                        <Item key={producto.id} producto={producto} />
                    ))}
                </div>
            ))}
        </div>
     );
    
}

export default ProductsGrid