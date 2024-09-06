# React Accommodation Finder
![alt text](</public/demo/Demostración.gif>)
## Descripción
Este proyecto es una aplicación de búsqueda de alojamientos desarrollada con React. Permite a los usuarios buscar alojamientos por ciudad y número de huéspedes, mostrando una lista de resultados compatibles. Si no se encuentran resultados, se muestra un mensaje adecuado. Design fue extraído de **[Figma](https://www.figma.com/design/KGNH8dbclXT1vzXLyPrBeu/Windbnb?node-id=0-1&node-type=CANVAS&t=gULjaMe8urhz2qWy-0)**

## Características

- Búsqueda de alojamientos por ciudad.
- Filtro de resultados por número de huéspedes.
- Modal interactivo para seleccionar ubicación y número de huéspedes.
- Mostrar mensaje cuando no se encuentran resultados compatibles.
- Restablecer filtros y mostrar todos los alojamientos disponibles.

##  Recursos

- React
- CSS
- Font Awesome
- Google Fonts
- Vercel
- Figma

## Instalación

Para clonar y ejecutar esta aplicación, necesitarás [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/) (que incluye [npm](http://npmjs.com)) instalados en tu computadora. Desde tu línea de comando:

```bash
# Clona este repositorio
$ git clone https://github.com/devHyrum/React-Accommodation-Finder.git

# Ve al directorio del repositorio clonado
$ cd React-Accommodation-Finder

# Instala las dependencias
$ npm install

# Inicia la aplicación
$ npm start
```
## Uso
1. **Buscar por ciudad**: Escribe el nombre de la ciudad en el campo "Add location" y selecciona una de las opciones sugeridas.
2. **Seleccionar número de huéspedes**: Haz clic en el campo "Add guests" y ajusta el número de adultos y niños.
3. **Realizar búsqueda**: Haz clic en el botón de búsqueda para ver los resultados.
4. **Restablecer búsqueda**: Haz clic en el logo para restablecer los filtros y mostrar todos los alojamientos disponibles.

## Estructura del Proyecto
```bash
├── public
│   ├── data
│   │   ├── stays.json
│   └── svg
│       ├── archivos.svg...
├── src
│   ├── components
│   │   ├── Header
│   │   ├── Main
│   │   └── Modal
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```
## Contribuir
Las contribuciones son bienvenidas. Si tienes una idea o encontraste un bug, por favor abre un issue o un pull request.