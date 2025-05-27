import { useState, useEffect } from 'react';
import logo from "/img/11studios.svg";
import './nav.css';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al cargar
    handleResize();
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpiar evento al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img className='main_logo' src={logo}></img>
        </a>
      </div>
      
      {/* Menú para desktop */}
      {!isMobile && (
        <div className="nav-links">
          <a href="/inicio">Inicio</a>
          <a href="/portafolio">Portafolio</a>
          <a href="/servicios">Servicios</a>
          <a href="/contacto">Contacto</a>
        </div>
      )}
      
      {/* Menú hamburguesa para mobile */}
      {isMobile && (
        <>
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
            <a href="/inicio" onClick={toggleMenu}>Inicio</a>
            <a href="/portafolio" onClick={toggleMenu}>Portafolio</a>
            <a href="/servicios" onClick={toggleMenu}>Servicios</a>
            <a href="/contacto" onClick={toggleMenu}>Contacto</a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;