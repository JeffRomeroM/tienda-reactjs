import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/products'; // Reemplaza con la URL de tu API

function Crud() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ name: '', description: '', price: 0, stock: 0, user_id: 0, categoria_id: 0, proveedor_id: 0 });
  const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    // Obtener la lista de productos al cargar la página
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleCrearProducto = () => {
    // Enviar una solicitud POST para crear un nuevo producto
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoProducto),
    })
      .then((response) => response.json())
      .then((data) => {
        setProductos([...productos, data]);
        setNuevoProducto({ name: '', description: '', price: 0, stock: 0, user_id: 0, categoria_id: 0, proveedor_id: 0  });
      })
      .catch((error) => console.error('Error al crear el producto:', error));
  };

  const handleEditarProducto = (producto) => {
    // Establecer el producto seleccionado para la edición
    setProductoEditado(producto);
  };

  const handleActualizarProducto = () => {
    // Enviar una solicitud PUT para actualizar el producto
    fetch(`${API_URL}/${productoEditado.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoEditado),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProductos = productos.map((producto) =>
          producto.id === data.id ? data : producto
        );
        setProductos(updatedProductos);
        setProductoEditado(null);
      })
      .catch((error) => console.error('Error al actualizar el producto:', error));
  };

  const handleEliminarProducto = (id) => {
    // Enviar una solicitud DELETE para eliminar el producto
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedProductos = productos.filter((producto) => producto.id !== id);
        setProductos(updatedProductos);
      })
      .catch((error) => console.error('Error al eliminar el producto:', error));
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.name} - {producto.description}- ${producto.price}- {producto.stock}- {producto.user_id}- {producto.categoria_id}- {producto.proveedor_id}
            <button onClick={() => handleEditarProducto(producto)}>Editar</button>
            <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Crear Producto</h2>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={nuevoProducto.name}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripcion del Producto"
        value={nuevoProducto.description}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio del Producto"
        value={nuevoProducto.price}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, price: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Precio del Producto"
        value={nuevoProducto.user_id}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, user_id: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Precio del Producto"
        value={nuevoProducto.categoria_id}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria_id: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Precio del Producto"
        value={nuevoProducto.proveedor_id}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, proveedor_id: parseFloat(e.target.value) })}
      />
      <button onClick={handleCrearProducto}>Crear</button>
      {productoEditado && (
        <div>
          <h2>Editar Producto</h2>
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={productoEditado.name}
            onChange={(e) => setProductoEditado({ ...productoEditado, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={productoEditado.description}
            onChange={(e) => setProductoEditado({ ...productoEditado, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio del Producto"
            value={productoEditado.price}
            onChange={(e) => setProductoEditado({ ...productoEditado, price: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Precio del Producto"
            value={productoEditado.user_id}
            onChange={(e) => setProductoEditado({ ...productoEditado, user_id: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Precio del Producto"
            value={productoEditado.categoria_id}
            onChange={(e) => setProductoEditado({ ...productoEditado, categoria_id: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Precio del Producto"
            value={productoEditado.proveedor_id}
            onChange={(e) => setProductoEditado({ ...productoEditado, proveedor_id: parseFloat(e.target.value) })}
          />
          <button onClick={handleActualizarProducto}>Actualizar</button>
        </div>
      )}
    </div>
  );
}

export default Crud;
