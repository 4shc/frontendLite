import React, { useState, useEffect } from "react"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"


const AgregarProductos = () => {

  const navigate = useNavigate()
  const [productos, setProductos] = useState({
    marca: '',
    categoria: '',
    proveedor: '',
    referencia: '',
    precio: ''

  })

  const { marca, categoria, proveedor, referencia, precio} = productos

  useEffect(() => {
    document.getElementById("marca").focus()
  }, [])

  const onChange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value
    })
  }

  const CrearProductos = async () => {
    const data = {
      marca: productos.marca,
      categoria: productos.categoria,
      proveedor: productos.proveedor,
      referencia: productos.referencia,
      precio: productos.precio,
  
    }
    const response = await APIInvoke.invokePOST('/api/productos/', data)
    const idProductos = response._id

    if (idProductos === '') {
      const msg = "Hubo un error al agregar un Producto"
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-outline-danger',
            closeModel: true
          }
        }
      })
    }else{
      navigate("/productos")
      const msg = "El producto fue agregado con éxito"
      swal({
        title: 'Información',
        text: msg,
        icon: 'success',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-outline-info',
            closeModel: true
          }
        }
      })
      setProductos({
        marca: '',
        categoria: '',
        proveedor: '',
        referencia: '',
        precio: ''
      })  
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    CrearProductos()
  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Productos"}
          breadCrumb1={"Lista de productos"}
          breadCrumb2={"agregar"}
          ruta1={"/productos/"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
            <h3 className="card-title"><button className="btn btn-outline-info"> + </button> </h3>
              <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-animation-speed="600"><i className="fas fa-minus"></i></button>

              </div>
            </div>

            <div className="card-body">
              <form onSubmit={onSubmit}>
                
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="marca">Marca</label>
                    <input type="text"
                      className="form-control"
                      id="marca"
                      name="marca"
                      placeholder="Ingrese la marca del producto"
                      value={marca}
                      onChange={onChange}
                      required
                    />
                  </div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>

                  </div>
                </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="categoria">Categoría</label>
                    <input type="text"
                      className="form-control"
                      id="categoria"
                      name="categoria"
                      placeholder="Ingrese la categoria del producto"
                      value={categoria}
                      onChange={onChange}
                      required
                    />
                  </div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>

                  </div>
                </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="proveedor">Proveedor</label>
                    <input type="text"
                      className="form-control"
                      id="proveedor"
                      name="proveedor"
                      placeholder="Ingrese el proveedor del producto"
                      value={proveedor}
                      onChange={onChange}
                      required
                    />
                  </div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>

                  </div>
                </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="referencia">Referencia</label>
                    <input type="text"
                      className="form-control"
                      id="referencia"
                      name="referencia"
                      placeholder="Ingrese la referencia del producto"
                      value={referencia}
                      onChange={onChange}
                      required
                    />
                  </div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>

                  </div>
                </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input type="number"
                      className="form-control"
                      id="precio"
                      name="precio"
                      placeholder="Ingrese los precio del cliente"
                      value={precio}
                      onChange={onChange}
                      required
                    />
                  </div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>

                  </div>
                </div>
                </div>

                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-outline-info px-5">Agregar</button>

                </div>
              </form>
            </div>

          </div>

        </section>

      </div>
      <Footer />
    </div>
  )
}

export default AgregarProductos