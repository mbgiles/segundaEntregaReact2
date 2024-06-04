import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
    </div>
  );
}

ItemDetail.propTypes = {
  product: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired
  }).isRequired
};

export default ItemDetail;