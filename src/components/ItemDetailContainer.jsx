import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ ...docSnap.data(), id: docSnap.id });
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [itemId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
