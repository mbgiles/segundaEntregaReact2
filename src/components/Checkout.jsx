import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import Swal from 'sweetalert2';
import '../css/main.css';

export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [docId, setDocId] = useState("");
    const [loading, setLoading] = useState(false);

    const comprar = async (data) => {
        setLoading(true);
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        };
        const pedidosRef = collection(db, "pedidos");
        try {
            const doc = await addDoc(pedidosRef, pedido);
            setDocId(doc.id);
            vaciarCarrito();
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: `Gracias por tu compra. Código de seguimiento: ${doc.id}`,
            });
        } catch (error) {
            console.error("Error al realizar la compra: ", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al procesar tu compra. Por favor, intenta nuevamente.',
            });
        } finally {
            setLoading(false);
        }
    };

    if (docId) {
        return (
            <div className="checkout-confirmation">
                <h1>Gracias por tu compra</h1>
                <p>Seguí tu pedido con el siguiente código: {docId}</p>
            </div>
        );
    }

    return (
        <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre *"
                        {...register("nombre", { required: "El nombre es obligatorio" })}
                    />
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email *"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Ingrese un email válido"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        {...register("telefono" )}
                    />
                    {errors.telefono && <p>{errors.telefono.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Calle y número"
                        {...register("direccion" )}
                    />
                    {errors.direccion && <p>{errors.direccion.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Ciudad"
                        {...register("ciudad" )}
                    />
                    {errors.ciudad && <p>{errors.ciudad.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Provincia/Estado"
                        {...register("provincia")}
                    />
                    {errors.provincia && <p>{errors.provincia.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Código Postal"
                        {...register("codigoPostal" )}
                    />
                    {errors.codigoPostal && <p>{errors.codigoPostal.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="País"
                        {...register("pais", )}
                    />
                    {errors.pais && <p>{errors.pais.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre del titular de la tarjeta"
                        {...register("titularTarjeta" )}
                    />
                    {errors.titularTarjeta && <p>{errors.titularTarjeta.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Número de tarjeta de crédito/débito"
                        {...register("numeroTarjeta")}
                    />
                    {errors.numeroTarjeta && <p>{errors.numeroTarjeta.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Fecha de vencimiento (MM/AA)"
                        {...register("fechaVencimiento" )}
                    />
                    {errors.fechaVencimiento && <p>{errors.fechaVencimiento.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="CVV"
                        {...register("cvv")}
                    />
                    {errors.cvv && <p>{errors.cvv.message}</p>}
                </div>
                <div>
                    <textarea
                        placeholder="Notas adicionales"
                        {...register("notas")}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Procesando..." : "Realizar compra"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;

