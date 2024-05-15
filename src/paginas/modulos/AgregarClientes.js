import React, { useState, useEffect } from "react"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
import APIInvoke from "../../configuracion/APIInvoke"
import ContentHeader from "../../componentes/ContentHeader"
import Footer from "../../componentes/Footer"
import Navbar from "../../componentes/Navbar"
import SidebarContainer from "../../componentes/SidebarContainer"


const AgregarClientes = () => {

  const navigate = useNavigate()
  const [clientes, setClientes] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    correo: '',
    telefono: '',
    direccion: ''

  })

  const { nombres, apellidos, cedula, correo, telefono, direccion } = clientes

  useEffect(() => {
    document.getElementById("nombres").focus()
  }, [])

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value
    })
  }

  const CrearClientes = async () => {
    const data = {
      nombres: clientes.nombres,
      apellidos: clientes.apellidos,
      cedula: clientes.cedula,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion
    }
    const response = await APIInvoke.invokePOST('/api/clientes/', data)
    const idClientes = response._id

    if (idClientes === '') {
      const msg = "Hubo un error al agregar un cliente"
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
      navigate("/clientes")
      const msg = "El cliente fue agregado con exito"
      swal({
        title: 'Informacion',
        text: msg,
        icon: 'success',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-outline-primary',
            closeModel: true
          }
        }
      })
      setClientes({
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: '',
        telefono: '',
        direccion: ''
      })  
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    CrearClientes()
  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Clientes"}
          breadCrumb1={"Lista de clientes"}
          breadCrumb2={"agregar"}
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
              <form onSubmit={onSubmit}>
                
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text"
                      className="form-control"
                      id="nombres"
                      name="nombres"
                      placeholder="Ingrese los nombres del cliente"
                      value={nombres}
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
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Ingrese los apellidos del cliente"
                      value={apellidos}
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
                    <label htmlFor="cedula">Cedula</label>
                    <input type="number"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      placeholder="Ingrese los cedula del cliente"
                      value={cedula}
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
                    <label htmlFor="correo">Correo</label>
                    <input type="email"
                      className="form-control"
                      id="correo"
                      name="correo"
                      placeholder="Ingrese los correo del cliente"
                      value={correo}
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
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="number"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      placeholder="Ingrese los telefono del cliente"
                      value={telefono}
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
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      placeholder="Ingrese los direccion del cliente"
                      value={direccion}
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

export default AgregarClientes