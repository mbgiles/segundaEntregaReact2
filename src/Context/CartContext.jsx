import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

  const [carrito, setCarrito] = useState(carritoInicial);

 
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  }

  const calcularCantidad = () => {
    return carrito.length;
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}
