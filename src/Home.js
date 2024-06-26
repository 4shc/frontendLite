import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from './componentes/ContentHeader'
import Footer from './componentes/Footer'
import Navbar from './componentes/Navbar'
import SidebarContainer from './componentes/SidebarContainer'

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">

        <ContentHeader
          titulo={"Dashboard"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-4 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Clientes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/Clientes"} className="small-box-footer">Ver Clientes <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>

              
              <div className="col-lg-4 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Productos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/Productos"} className="small-box-footer">Ver Productos <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>
            
              <div className="col-lg-4 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Proveedores</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/proveedores"} className="small-box-footer">Ver Proveedores <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>



            </div>
          </div>
        </section>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home;


/* 
Estilo con cada card en una sola fila o RAW

import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from './componentes/ContentHeader'
import Footer from './componentes/Footer'
import Navbar from './componentes/Navbar'
import SidebarContainer from './componentes/SidebarContainer'

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">

        <ContentHeader
          titulo={"Dashboard"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Clientes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/Clientes"} className="small-box-footer">Ver Clientes <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>
            
            </div>

            <div className="row">

              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Proveedores</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/proveedores"} className="small-box-footer">Ver Proveedores <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Productos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/Productos"} className="small-box-footer">Ver Productos <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home; */