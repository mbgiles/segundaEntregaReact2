import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, quitarProducto, aumentarCantidad, disminuirCantidad } = useContext(CartContext);
=======

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
>>>>>>> 87b7025c0ccf240523d506a4779233251fdc97d5
  
  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="carrito">
        {carrito.map((prod) => (
<<<<<<< HEAD
          <div key={prod.id} className="carrito-item">
            <img src={prod.imagen} alt={prod.nombre} className="carrito-item-imagen" />
            <h2>{prod.nombre}: ${prod.precio} x {prod.cantidad}</h2>
            <button onClick={() => aumentarCantidad(prod.id)}>+</button>
            <button onClick={() => disminuirCantidad(prod.id)}>-</button>
            <button onClick={() => quitarProducto(prod.id)}>Quitar ❌</button>
          </div>
=======
          <h1 key={prod.id}>{prod.nombre}: ${prod.precio}</h1>
>>>>>>> 87b7025c0ccf240523d506a4779233251fdc97d5
        ))}
        {
          carrito.length > 0 ?
          <>
            <h2>Total: ${calcularTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar carrito</button>
<<<<<<< HEAD
            <Link to= "/finalizar-compra">Finalizar compra</Link>
=======
>>>>>>> 87b7025c0ccf240523d506a4779233251fdc97d5
          </> :
          <h2>Carrito vacío 😥</h2>
        }
    </div>
  )
}

export default Carrito;
