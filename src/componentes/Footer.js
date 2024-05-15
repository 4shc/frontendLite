import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Proyecto Final_V1</b>
            </div>
            <strong>© 2024 <Link to={"https://adminlte.io"}>AdminLTE.io</Link>.</strong> Todos los derechos reservados
        </footer>
    );
}

export default Footer
