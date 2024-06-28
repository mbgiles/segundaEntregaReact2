import React, { useContext, useEffect } from 'react';
import { CartCheck } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);


  const [cantidad, setCantidad] = React.useState(0);

  useEffect(() => {
    setCantidad(calcularCantidad());
  }, [calcularCantidad]);

  return (
    <Link className="carrito" to="/carrito">
      <CartCheck color="black" /> {cantidad}
    </Link>
  );
}