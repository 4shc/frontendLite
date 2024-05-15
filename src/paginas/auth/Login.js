
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import APIInvoke from '../../configuracion/APIInvoke'
import swal from 'sweetalert'

const Login = () => {

  const navigate = useNavigate()

  // Definimos el estado inicial sel componente
  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const {email, password} = usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    document.getElementById("email").focus()
  }, [])

  const IniciarSesion = async () =>{
    
    if(password.length < 8){
      const msg = "La contraseña debe contener mínimo 8 caracteres"
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm:{
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      })
    }else{
      const data = {
        email: usuario.email,
        password: usuario.password
      }
      const response = await APIInvoke.invokePOST('/api/auth', data)
      const mensaje = response.msg

      if(mensaje === 'El Usuario no esta registrado' || mensaje === 'La contraseña es incorrecta'){
        const msg = "No fue posible iniciar sesión 🤔, revisa tus datos"
        swal({
          title: 'Error',
          text: msg,
          icon: 'error',
          buttons: {
            confirm:{
              text: 'OK',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        })
      }else{
        // Obteniendo el Token de acceso
        const jwt = response.token
        // Lo guarda en el localstorage
        localStorage.setItem('token', jwt)
        
        // Despues del login, entramos al home de la pagina
        navigate("/home")
      }
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    IniciarSesion()
  }



  return (
    <div className="hold-transition login-page dark-mode">
      <div className="login-box">
        <div className="login-logo">
          <Link to = {"#"}><b>Iniciar</b> sesión</Link>
        </div>

        <div className="card bor4">
          <div className="card-body login-card-body">
            <p className="login-box-msg"> Login 😎</p>
            
            <form onSubmit={onSubmit}>

              <div className="input-group mb-3">
                <input type="email" 
                  className="form-control" 
                  placeholder="Email"
                  id='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="password"
                  className="form-control" 
                  placeholder="Password"
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center mb-3">
                <button type='submit' className='btn btn-block btn-info'>Ingresar</button>
                <Link to = {"/Registro"} className='btn btn-block btn-secondary'><b>Registro</b></Link>
              </div>
              
            </form>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Login