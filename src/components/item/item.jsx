import React from 'react';

const Item = ({producto}) => {
    let stylesImg = {
        width: 130,
        height: 190

    }
    let styleDiv1 = {
        marginTop: 40,
        padding: 90,
        width: 240,
        height: 320,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
    let styleDiv2 = {
        fontSize: 12,
        display:'flex',
        flexDirection: 'column',
        textAlign:'center',
        width: 240,
        height: 320,
        
    }
    
    return(
        <div style={ styleDiv1 }>
            <div>
                <img style={ stylesImg } src={producto.image} alt="Imagen de los productos"/>
            </div>
            <div style={ styleDiv2 }>
                <p>${producto.price}</p>
                <p>{producto.title}</p>
            </div>
        </div>
    )
}

export default Item