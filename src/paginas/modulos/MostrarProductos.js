import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import swal from "sweetalert"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"

const MostrarProductos = () => {

  const [productos, setProductos] = useState([])

  const getProductos = async () =>{
    const response = await APIInvoke.invokeGET('/api/productos/')
    setProductos(response.productos)
  }

  useEffect(() =>{
    getProductos()
  }, [])

  const eliminarProductos = async (e, idProducto) =>{
    e.preventDefault()
    const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`)
    
    if(response.msg === 'El producto fue eliminado'){
      const msg = "El producto fue eliminado de forma exitosa😎!"
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
      getProductos()

    }else{
      const msg = "No pudimos eliminar el producto😥!"
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm:{
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-outline-danger',
            closeModal: true
          }
        }
      })
    }
  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de Productos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Productos"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/productos/agregar"} className="btn btn-block btn-outline-info btn-sm">Agregar Productos</Link>
              </h3>
              <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-animation-speed="600"><i className="fas fa-minus"></i></button>

              </div>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-striped table-hover">
                <thead className="">
                  <tr>
                    <th >Marca</th>
                    <th >Categoría</th>
                    <th >Proveedor</th>
                    <th >Referencia</th>
                    <th >Precio</th>
                    <th >Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto, index) =>(
                    <tr key={index}>
                      <td>{producto.marca}</td>
                      <td>{producto.categoria}</td>
                      <td>{producto.proveedor}</td>
                      <td>{producto.referencia}</td>
                      <td>{producto.precio}</td>
                      <td>
                        <Link to={`/productos/editar/${producto._id}`} className="btn  btn-sm btn-outline-info mx-2">Editar</Link>
                        <button onClick={(e) => eliminarProductos(e, producto._id)} className="btn  btn-sm btn-outline-secondary">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </div>
  )
}

export default MostrarProductos


