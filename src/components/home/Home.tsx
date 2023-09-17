import React from 'react';
import './Home.css'; // Asegúrate de importar tus estilos CSS aquí

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Bienvenido a Mi Tienda en Línea</h1>
        <p>Descubre una amplia selección de productos de alta calidad.</p>
        <a href="/productos" className="cta-button">Explorar Productos</a>
      </div>
    </div>
  );
}

export default Home;
