# Star Wars Searcher

Proyecto realizado utilizando el Framework **ReactJS**. Se ha partido de un proyecto sencillo, típico Hola Mundo! y se ha modificado su estructura para adaptarla a las necesidades del proyecto.

La aplicación web consiste en un buscador de películas de Star Wars, que guarda un historial de las páginas por las que has navegado, y permite visualizar la información de los personajes de las películas, así como de las películas en sí. Para ello se ha hecho uso de la API [SWAPI](http://swapi.co/).

## Instrucciones de Instalación

Para poder ver en funcionamiento el proyecto hay que clonarse este repositorio, tener instalado [nodejs](https://nodejs.org/es/download/) con el gestor de dependencias npm, y lanzar un par de comandos:

```sh
$ git clone https://github.com/vmunozre/starwars-searcher
$ cd ./starwars-searcher
$ npm install
$ npm start
```
Con esto se nos abrirá una ventana del navegador con el proyecto funcionando!

## Componentes realizados

Listado de componentes:

- **App**: Núcleo de la aplicación, carga los demás componentes en función del estado de la página.
- **Searcher**: Buscador de las películas, se le ha incluido un sistema de autocompletado.
- **Historic**: Historial de las páginas visitadas, guarda la información en una cookie del navegador que expira a los 10 días.
- **Carousel**: Carrusel de personajes, va haciendo peticiones a la API proporcionada al llegar al último elemento.
- **Film**: Muestra información de la película proporcionada.
- **CarouselItem**: Estructura para mostrar los personajes dentro del carousel.
- **ItemList**: Lista las películas, tanto en el buscador como en el historial.
- **Item**: Estructura para mostrar cada elemento de la búsqueda o el historial.
- **KonamiCode**: Funcionalidad extra para darle un toque divertido y creativo a la web.

# Creditos

Autor: [Victor Reiner](http://victorreiner.com/)