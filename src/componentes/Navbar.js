import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const CerrarSesion = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <nav className='main-header navbar navbar-expand dark-mode'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to={"#"} className='nav-link' data-widget="pushmenu" role="button"> 
            <i className='fas fa-bars'></i> 
          </Link>
        </li>

        <li className='nav-item d-none d-sm-inline-block'>
          <strong onClick={CerrarSesion} className='nav-link' style={{cursor:'pointer'}}>Cerrar sesión</strong>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <Link to={"#"} className='nav-link' data-widget="fullscreen" role="button"> 
              <i className='fas fa-expand-arrows-alt'></i> 
            </Link>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar