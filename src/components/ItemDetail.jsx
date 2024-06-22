import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ( {producto} ) => {
  const { agregarAlCarrito } = useContext(CartContext);

    
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>

    </div>
  )
}
export default ItemDetail;

