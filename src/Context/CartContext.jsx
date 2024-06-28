import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];
  const [carrito, setCarrito] = useState(carritoInicial);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((prod) => prod.id === producto.id);
    if (existe) {
      const nuevoCarrito = carrito.map((prod) =>
        prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const quitarProducto = (idProducto) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== idProducto);
    setCarrito(nuevoCarrito);
  };

  const aumentarCantidad = (idProducto) => {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === idProducto ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (idProducto) => {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === idProducto ? { ...prod, cantidad: prod.cantidad - 1 } : prod
    );
    setCarrito(nuevoCarrito.filter((prod) => prod.cantidad > 0));
  };

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarProducto, aumentarCantidad, disminuirCantidad, calcularCantidad, calcularTotal, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
