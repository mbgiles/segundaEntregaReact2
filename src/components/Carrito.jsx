import React, { useContext } from 'react'
import  { CartContext } from '../Context/CartContext'


const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="carrito">
        {carrito.map((prod) => <h1> {prod.nombre}: ${prod.precio} </h1>)}
        {
          carrito.lenght > 0 ?
          <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar carrito</button>
          </> :
          <h2>Carrito vacío 😥</h2>
        }
        <h2>Total: ${calcularTotal()} </h2>
        <button onClick={handleVaciar}> Vaciar carrito </button>
    </div>
  )
}

export default Carrito