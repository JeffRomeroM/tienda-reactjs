import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const notFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 60px)',
    textAlign: 'center',
  };

  const errorTextStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={notFoundStyle}>
      <h1 style={errorTextStyle}>Error 404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">
        <button style={buttonStyle}>Regresar al Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
