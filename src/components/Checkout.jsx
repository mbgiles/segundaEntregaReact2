import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm(); 
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setDocId(doc.id);
            vaciarCarrito();
    })
    }

    if (docId) {
        return(
            <>
            <h1>Gracias por tu compra</h1>
            <p>Seguí tu pedido con el siguiente código: {docId} </p>
            </>
        )
    }
  return (
    <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su email" {...register("email")} />
                <button type="submit">Realizar compra</button>
            </form>
        </div>
  )
}

export default Checkout
