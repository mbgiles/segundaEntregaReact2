import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';

export const ItemDetail = ( {producto} ) => {
  const { agregarAlCarrito } = useContext(CartContext);

    
  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div>
        <h2>{producto.nombre}</h2>
        <img className='detalle-imagen' src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>

    </div>
  )
}
export default ItemDetail;

