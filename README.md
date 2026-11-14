# Movie Explorer

Aplicación web desarrollada con React y Vite que permite explorar películas populares, buscar títulos y consultar información detallada mediante la API de The Movie Database (TMDB).

## Características

- Consulta de películas populares.
- Búsqueda de películas por título.
- Visualización de pósteres, fechas de estreno y calificaciones.
- Página individual con información detallada de cada película.
- Información sobre sinopsis, géneros, duración y fecha de estreno.
- Navegación entre páginas mediante React Router.
- Interfaz adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- **React:** biblioteca para construir interfaces de usuario.
- **Vite:** herramienta de desarrollo y compilación.
- **JavaScript:** lenguaje de programación.
- **CSS:** diseño y presentación de la aplicación.
- **React Router DOM:** navegación entre páginas.
- **TMDB API:** consulta de información cinematográfica.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jairo-MJ/practica7-react-peliculas.git
```

### 2. Entrar al directorio

```bash
cd practica7-react-peliculas
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia `.env.example`:

```env
VITE_TMDB_API_KEY=tu_api_key_de_tmdb
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

Es necesario contar con una API Key de TMDB para consultar la información de las películas.

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador.

## Rutas principales

| Ruta | Descripción |
|---|---|
| `/` | Catálogo de películas populares y búsqueda. |
| `/movies/:movieId` | Información detallada de una película. |

## Estructura del proyecto

```text
practica7-react-peliculas/
├── public/
│   └── Escudo_CUCEI.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetails.jsx
│   ├── services/
│   │   └── tmdb.js
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## API utilizada

La aplicación utiliza **The Movie Database (TMDB)** para obtener información actualizada de películas, incluyendo sus títulos, imágenes, sinopsis, géneros y calificaciones.

Sitio oficial: https://www.themoviedb.org/

Documentación de la API: https://developer.themoviedb.org/docs

## Autor

**Jairo José María Morales Jiménez**

Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)  
Universidad de Guadalajara

**Asignatura:** Desarrollo de Aplicaciones Web en la Nube y Móviles  
**Docente:** Zeus Emmanuel Gutiérrez Cobián  
**Calendario:** 2026B  
**Fecha:** Noviembre de 2026

## Repositorio

https://github.com/Jairo-MJ/practica7-react-peliculas

---

Este producto utiliza la API de TMDB, pero no está respaldado, certificado ni aprobado por TMDB.