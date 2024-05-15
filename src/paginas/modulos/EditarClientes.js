import React, { useState, useEffect } from "react"
/* import swal from "sweetalert" */
import { useNavigate, useParams } from "react-router-dom"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"
import swal from "sweetalert"

const EditarClientes = () => {

  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  // Función para actualizar clientes
  const editarClientes = async (e) =>{
    e.preventDefault()
    
    const response = await APIInvoke.invokePUT(`/api/clientes/${id}`,  {
      nombres: nombres,
      apellidos: apellidos,
      cedula: cedula,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    })
    navigate('/clientes')

    if(response.msg === "Cliente modificado correctamente" ){
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
    getclientesID()
  }, [])
  
  const getclientesID = async () => {
    const resul = await APIInvoke.invokeGET(`/api/clientes/${id}`)

    setNombres(resul.nombres)
    setApellidos(resul.apellidos)
    setCedula(resul.cedula)
    setCorreo(resul.correo)
    setTelefono(resul.telefono)
    setDireccion(resul.direccion)
  
  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper fluid">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Lista de clientes"}
          breadCrumb2={"editar"}
          ruta1={"/clientes/"}
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
              <form onSubmit={editarClientes}>
                
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text"
                      className="form-control"
                      id="nombres"
                      name="nombres"
                      placeholder="Ingrese los nombres del cliente"
                      value={nombres}
                      onChange={(e) => setNombres(e.target.value)}
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
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Ingrese los apellidos del cliente"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
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
                    <label htmlFor="cedula">Cedula</label>
                    <input type="number"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      placeholder="Ingrese los cedula del cliente"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
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
                    <label htmlFor="correo">Correo</label>
                    <input type="email"
                      className="form-control"
                      id="correo"
                      name="correo"
                      placeholder="Ingrese los correo del cliente"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
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
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="number"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      placeholder="Ingrese los telefono del cliente"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
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
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      placeholder="Ingrese los direccion del cliente"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
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

export default EditarClientes