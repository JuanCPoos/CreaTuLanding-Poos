import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simular una llamada asíncrona para obtener los detalles del producto
    const fetchItem = async () => {
      try {
        // Simulación de la obtención de datos del producto
        const response = await fetch(
          `https://api.example.com/products/${itemId}`
        );
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          {/* Agregar botón para agregar al carrito u otras funcionalidades */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
