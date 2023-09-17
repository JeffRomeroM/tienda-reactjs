import  { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header--brand">
        <Link to="/" className="link" onClick={toggleMenu}>
        <img src="../../../public/J.png" alt="j" width={50}/>
        </Link>
      </div>
      <button className={`header--toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      
      <nav className={`header--nav ${isOpen ? 'open' : ''}`}>
         <ul>
            <li className="menu-item">
              <Link to="/productos" className="link" onClick={toggleMenu}>Productos</Link>
            </li>
            <li className="menu-item">
              <Link to="/ventas" className="link" onClick={toggleMenu}>Ventas</Link>
            </li>
            <li className="menu-item">
              <Link to="/mercadeo" className="link" onClick={toggleMenu}>Mercadeo</Link>
            </li>
            <li className="menu-item">
              <Link to="/login" className="link" onClick={toggleMenu}>Login</Link>
            </li>
         </ul>
      </nav>
    </header>
  );
};

export default Navbar;
