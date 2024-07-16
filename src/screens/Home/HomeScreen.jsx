
import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const HomeScreen = () => {
  return (
<div>
<nav className="navbar">
        <div className="logo"><img src="" alt="" /></div>
        <div className="links">
        <Link to="/crearProducto">Crear Producto</Link>
        <Link to="/misproductos">Mis Productos</Link>
        </div>
      </nav>
<h1>BIENVENIDO A NUESTRO SISTEMA DE GESTION DE PRODUCTOS </h1>
<h1>EN ESTE SISTEMA PUEDES GESTIONAR TUS PRODUCTOS DE MANERA EFICIENTE </h1>
<p className='alert'>PARA GESTIONAR TU PRIMER PRODUCTO INGRESA AL SIGUIENTE LINK 
<Link to="/crearProducto">CREAR PRODUCTO</Link></p>
<p>PARA VISUALIZAR TUS PRODUCTOS INGRESA AL SIGUIENTE LINK
<Link to="/misproductos">MIS PRODUCTOS</Link>
</p>
<h2>SI TE GUSTÓ NUESTRA APP TE INVITAMOS A SEGUIRNOS EN NUESTRAS REDES SOCIALES</h2>
<h3>RECOMENDANOS Y DEJA TU ME GUSTA </h3>
<footer className="footer">
  <div className="container">
    <div className="footer-content">
      <p>&copy; 2024 LM DEV. Todos los derechos reservados.</p>
      <nav>
        <ul className="social-links">
          <li><a href="#"><i class="bi bi-facebook"></i></a></li>
          <li><a href="#"><i class="bi bi-instagram"></i></a></li>
          <li><a href="#"><i class="bi bi-twitter-x"></i></a></li>
          <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
        </ul>
      </nav>
    </div>
  </div>
</footer>
    </div>
)
} 
export default HomeScreen 

