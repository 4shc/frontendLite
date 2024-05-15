import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"
import swal from "sweetalert"

const EditarProductos = () => {

  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [proveedor, setProveedor] = useState('')
  const [referencia, setReferencia] = useState('')
  const [precio, setPrecio] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  // Función para actualizar clientes
  const EditarProductos = async (e) =>{
    e.preventDefault()
    
    const response = await APIInvoke.invokePUT(`/api/productos/${id}`,  {
      marca: marca,
      categoria: categoria,
      proveedor: proveedor,
      referencia: referencia,
      precio: precio
    })
    navigate('/productos')

    if(response.msg === "Producto modificado correctamente" ){
      const msg = "El cliente fue modificado exitosamente 😎"
      swal({
        title: 'Informacion',
        text: msg,
        icon: 'success',
        buttons: {
          confirm:{
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-outline-info',
            closeModal: true
          }
        }
      })
    }
  }

  useEffect( () =>{
    getproductosID()
  }, [])
  
  const getproductosID = async () => {
    const resul = await APIInvoke.invokeGET(`/api/productos/${id}`)

    setMarca(resul.marca)
    setCategoria(resul.categoria)
    setProveedor(resul.proveedor)
    setReferencia(resul.referencia)
    setPrecio(resul.precio)
  
  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper fluid">
        <ContentHeader
          titulo={"Editar Productos"}
          breadCrumb1={"Lista de Productos"}
          breadCrumb2={"editar"}
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
              <form onSubmit={EditarProductos}>
                
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="marca">Marca</label>
                    <input type="text"
                      className="form-control"
                      id="marca"
                      name="marca"
                      placeholder="Ingrese  marca del Producto"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
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
                      placeholder="Ingrese los categoria del cliente"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
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
                      onChange={(e) => setProveedor(e.target.value)}
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
                      placeholder="Ingrese referencia del producto"
                      value={referencia}
                      onChange={(e) => setReferencia(e.target.value)}
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
                      placeholder="Ingrese el precio del producto"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
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
                  <button type="submit" className="btn btn-outline-info px-5">Editar</button>

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

export default EditarProductos