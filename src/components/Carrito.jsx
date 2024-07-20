import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, quitarProducto, aumentarCantidad, disminuirCantidad } = useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  }

  const totalFormateado = () => {
    return calcularTotal().toFixed(2); // Limita el total a 2 decimales
  }

  return (
    <div className="carrito">
        {carrito.map((prod) => (
          <div key={prod.id} className="carrito-item">
            <img src={prod.imagen} alt={prod.nombre} className="carrito-item-imagen" />
            <h2>{prod.nombre}: ${prod.precio} x {prod.cantidad}</h2>
            <button onClick={() => aumentarCantidad(prod.id)}>+</button>
            <button onClick={() => disminuirCantidad(prod.id)}>-</button>
            <button onClick={() => quitarProducto(prod.id)}>Quitar ❌</button>
          </div>
        ))}
        {
          carrito.length > 0 ?
          <>
            <h2>Total: ${totalFormateado()}</h2>
            <button onClick={handleVaciar}>Vaciar carrito</button>
            <Link to= "/finalizar-compra" className="button-link">Finalizar compra</Link>
          </> :
          <h2>Carrito vacío 😥</h2>
        }
    </div>
  )
}

export default Carrito;
