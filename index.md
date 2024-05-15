  # Proceso Inicial
  - Creamos nuevo proyecto.('proyecto-final-admin')
  - Creamos dos directorios ('backend' y 'frontend')
  - Iniciamos u nuevo proyecto node.js en el backend ('npm init')
  - Instalamos las dependencias a usar:
    - npm i express
    - npm i cors
    - npm i dotenv 
    - npm i mongoose
    - npm i jsonwebtoken
    - npm i express-validator
  
    Ahora creamos un archivo nuevo '.env' para las variables de entorno
    en este caso usamos la misma que antes de nuestro backend con Mongoose y le
    añadimos una linea 'SECRETA....' el archivo queda asi:
      ```
      MONGO_URL = mongodb+srv://4USER:4MIn4C_.ON@cluster0.4bxgl6w.mongodb.net/apiclientes
      SECRETA =  palabrasecreta
      ```

    Para comprobar que todo funciona de manera correcta envía un Json con los datos del
    modelo Usuarios y verifica que se genere el Token: 
    ```
    {
    "nombre" : "Bryan Hernández",
    "email": "aprdiz4s@gmail.com",
    "password": "4MIn4C_.ON",
    "registro": "2024-04-12" 
    }
    ```

    Traemos nuestros módulos de clientes y 'productos' hechos anteriormente en nuestro backend
    con mongoose y express.

    Frontend: Para el frontend instalamos React en el directorio ya creado anteriormente
    con el siguiente comando para que tome la misma ruta, ojo abre primero otra ventana de 
    visual studio code y en ella la carpeta 'Frontend' y en la terminal si ejecuta:

      - npx create-react-app .

  Tarea: 
  Descargar el zip en la carpeta del proyecto. mira el video de OBS
  https://github.com/ColorlibHQ/AdminLTE/releases

  Listo ahora instalaremos las siguientes dependencias:
  - npm i bcryptjs
  - npm i cors
  - npm i dotenv 
  - npm i jsonwebtoken
  - npm i mongoose

# Creación de nuevos directorios y archivos
Con la creación de nuevos directorios y archivos tenemos la siguiente estructura:
## src  
- componentes ***//new***
- config ***//new***
  - APIInvoke.js ***//new***
- paginas ***//new***
  - auth ***//new***
    - Login.js ***//new***
    - Registro.js ***//new***
- App.css
- App.js
- App.test.js
- App.test.js
- config.js ***//new***
- index.css
- index.js
- reportWebVitals.js
- setupTests.js

Luego de crear nuestra estructura instalamos las siguientes dependencias:

# Instalación react routing
  0.  ```
      npm install --save react-router-dom
      ```
# Instalación paquete de alertas 'sweetalert'
  0.  ```
      npm install sweetalert
      ```
Ahora vamos a instalar el template de 'Adminlte'. Para ello debemos realizarlo de dos formas para evitar errores la primer forma es:

# Instalación template ADMINLTE 3
  0.  ```
      npm install admin-lte@^3.2 --save
      ```
Para confirmar que todo esta bien verifica que en el archivo package.json que aparezca la dependencia. Igualmente para descartar errores, como ya hicimos la tarea de descargar Adminlte, extraemos el archivo .zip y copiamos y pegamos los directorios llamados 'dist' y  'plugins' en nuestro directorio Frontend/public/ 

Finalmente importamos algunos css en nuestro **index.html** para las fuentes(Google Font), Iconos(Font Awesome), generales(Boostrap) y para nuestro template(Theme style) necesarios para que nuestro template se complemente de mejor forma:

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

  Adicional a esto también importamos unos **SCRIPS** de Javascrip en nuestro index.html, recuerda que los script van a finalizar la etiqueta body

  ```
  <!-- jQuery -->
  <script src="%PUBLIC_URL%/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="%PUBLIC_URL%/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="%PUBLIC_URL%/dist/js/adminlte.min.js"></script>
  ```

  ## codes
  ```
  dark-mode
  ```
  con
  ```
  navbar-dark
  ```
