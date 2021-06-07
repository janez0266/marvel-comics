# 
<img src="./src/images/banner_marvel.png" alt="Marvel's Landing Page" width="700">
<h1>Marvel Comics</h1>
<hr>
<p><h3>Proyecto para aplicar los conocimientos adquiridos en el Lenio Bootcamp 2021</h3></p>
<br>
<p>Elememntos que debe tener el proyecto:</p>
<ul>
  <li> Las peticiones se tienen que realizar a la siguiente URL:<br>
  http://gateway.marvel.com/v1/</li>
  <li>El buscador tiene que tener la posibilidad de buscar los nombres de los Personajes de Marvel en el input pero también por URL.
  </li>
  <li>Cuando se entra la primera vez en la app web sin ningún personaje en la URL tiene que mostrar un personaje aleatorio y así por cada vez que vuelva a recargar la página.
  </li>
  <li>La búsqueda tiene que contemplar buscar por similitudes de texto y parecidos de nombre, es decir, con solo buscar “spider” debería de renderizar todas las posibilidades y matches que abarcan.
  </li>
  <li>La búsqueda tiene que tener la posibilidad de buscar por comic directamente también y si es un link que viene directamente de la página de marvel(​ The Amazing Spider-Man #22​ ) tiene que visualizar un preview del cómic. La manera que se mostrarán las búsquedas serán en forma de ​ cards y modales para el detalle del personaje con sus comics.
  </li>
  <li>Al clickear un card debería ir al detalle del personaje y mostrar un listado de sus cómics ordenados por fecha.
  </li>
  <li>El buscador de marvel tiene que contemplar que por la búsqueda de la URL se pueda hacer búsqueda de los personajes mediante query strings en la url del sitio, por ejemplo: http://my.app.com​ /?character=”spiderman”&comic=”​ The Amazing Spider-Man #22​ ” ​y debe renderizar el card de Spiderman que al clickearse solo debe de aparecer el comic que fue buscado(este
  feature debe de soportar más de un cómic por URL, así como más de un personaje)
  </li>
  <li>La búsqueda tiene que poder guardarse en un listado de favoritos y que persista en el browser para que pueda ser usada en un futuro solo dandole click a la lista de búsquedas favoritas el cual tiene la estrella en la esquina superior derecha del input de búsqueda.
  </li>
  <li>La aplicación tiene que poder ser completamente cambiada mediante solo unas cuantas variables del theme usando styled-components.
</li>
</ul>
<br>
## Primer Commit y Push en MASTER
<ul>
  <li>Plantilla inicial de la barra de navegación y el catálogo de personajes </li>
  <li>Preparación del formato de las tarjetas de presentación de los personajes (Cards)</li>
  <li>Adecuación para que la página sea Responsive</li>
  <li>Creación de los componentes requeridos para mostrar la página inicial antes de invocar al buscador</li>
  <li>Push a Master</li>
  <li>Se pasa el proyecto a una rama "Feature-galeria" para trabajar lo referente a la api y carga inicial de los personajes</li>

 </ul>
## Feature Galeria Random
<ul>
  <li>Creación de una rama "Feature-galeria-random" para trabajar lo referente a la api y carga inicial de los personajes</li>
  <li>Se incluye todo lo referente a la carga inicial de la página, mostrando ocho personajes de forma aleatoria y diferentes cada vez que se carga la página</li>
  <li>Se habilita una ventana que informa que esperea que cargue la página</li>
  <li>Se activa la ventana MODAL al hacer click a la Card</li>
  <li>Se aseguran las claves (Key) publicas y privadas en .env</li>
</ul>
 ## Elaborado por:
 Ing. Julio Añez

 ### Como instalar: 🔧
- git clone https://github.com/janez0266/marvel-comics.git
- npm install 

- Crear una variable de entorno para colocar las Keys
  - Entrar a la página https://developer.marvel.com/ y crear una cuenta
  - Solicitar las Keys
  - Crear un archivo en la raiz llamado .env
  - Editarlo y agregar las lineas:
    - // .env
      REACT_APP_API_PUBLIC_KEY="colocar la key publica sin comillas"
      REACT_APP_API_PRIVATE_KEY="colocar la key privada sin comillas"
- npm start 