import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import swal from "sweetalert"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"

const MostrarClientes = () => {

  const [clientes, setClientes] = useState([])

  const getClientes = async () =>{
    const response = await APIInvoke.invokeGET('/api/clientes/')
    setClientes(response.clientes)
  }

  useEffect(() =>{
    getClientes()
  }, [])

  const eliminarClientes = async (e, idCliente) =>{
    e.preventDefault()
    const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`)
    
    if(response.msg === 'El cliente fue eliminado'){
      const msg = "El cliente fue eliminado de forma exitosa😎!"
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
      getClientes()

    }else{
      const msg = "No pudimos eliminar el cliente😥!"
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
          titulo={"Listado de Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/clientes/agregar"} className="btn btn-block btn-outline-info btn-sm">Agregar Clientes</Link>
              </h3>
              <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-animation-speed="600"><i className="fas fa-minus"></i></button>

              </div>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-striped table-hover">
                <thead className="">
                  <tr>
                    <th >Nombres Cliente</th>
                    <th >Apellidos Cliente</th>
                    <th >Cédula</th>
                    <th >Correo</th>
                    <th >Teléfono</th>
                    <th >Dirección</th>
                    <th >Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente, index) =>(
                    <tr key={index}>
                      <td>{cliente.nombres}</td>
                      <td>{cliente.apellidos}</td>
                      <td>{cliente.cedula}</td>
                      <td>{cliente.correo}</td>
                      <td>{cliente.telefono}</td>
                      <td>{cliente.direccion}</td>
                      <td>
                        <Link to={`/clientes/editar/${cliente._id}`} className="btn  btn-sm btn-outline-info mx-2">Editar</Link>
                        <button onClick={(e) => eliminarClientes(e, cliente._id)} className="btn  btn-sm btn-outline-secondary">Eliminar</button>
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

export default MostrarClientes


