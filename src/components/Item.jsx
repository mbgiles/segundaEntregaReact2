import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/main.css';
import { CartContext } from '../Context/CartContext';


export const Item = ( {producto} ) => {
  
  const {agregarAlCarrito} = useContext(CartContext);

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}