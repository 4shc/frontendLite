1. Módulo de iniciar  sesión.
2. Creación de cuenta de usuario, debe solicitar el nombre completo del usuario, correo electrónico y la contraseña
de acceso.
3. La contraseña debe ser mínimo de 8 caracteres.
4. Validar que las contraseñas sean iguales al momento de crear la nueva cuenta de usuario.
5. Validar campos obligatorios.
6. Mostrar errores del sistema con alertas.
7. Debe tener una pantalla principal o dashboard, NO es posible acceder al dashboard si no ha iniciado sesión.
  ```
  npm install bcryptjs cors dotenv jsonwebtoken mongoose
  ```

## carpetas del backend
  - config 
  - controllers 
  - middleware 
  - models -
  - routes

## front creamos el proyecto
  ```
  npx create-react-app .
  ```

creamos las carpetas en src -  val - componentes - paginas - creamos un archivo index.js


## instalación admin lite  
  ```
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="%PUBLIC_URL%/plugins/fontawesome-free/css/all.min.css" />
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="%PUBLIC_URL%/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
  <!-- Theme style -->
  <link rel="stylesheet" href="%PUBLIC_URL%/dist/css/adminlte.min.css" />
  ```

  ```
  <!-- jQuery -->
  <script src="%PUBLIC_URL%/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="%PUBLIC_URL%/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="%PUBLIC_URL%/dist/js/adminlte.min.js"></script>
  ```