# Random Music · Binary Jazz (React + Vite + Tailwind)

Aplicación que consume la API pública **Binary Jazz – Genrenator** para crear géneros musicales aleatorios y mostrarlos en una interfaz moderna. Además reproduce un preview de 30s desde iTunes cuando hay coincidencias.

## 🚀 Demo
(https://68ad34d6736e5a045eb0ca8d--proyecto-me-5.netlify.app/)

## 🧩 Tecnologías
- React + Vite
- React Router
- TailwindCSS
- Error Boundary (manejo de errores)
- Fetch API

## 🔗 API utilizadas
- Binary Jazz (género aleatorio):  
  `https://binaryjazz.us/wp-json/genrenator/v1/genre/`
- iTunes Search (preview de pista):  
  `https://itunes.apple.com/search?term=<texto>&media=music&limit=1`

## ✨ Funcionalidad
- **Crear género** (consume Binary Jazz y guarda en historial)
- **Historial** (localStorage) en la página **Géneros**
- **Preview de audio** (iTunes, si hay resultado)
- **Rutas**: Inicio · Conócenos · Géneros · Aleatorio
- Estilos con **Tailwind** + layout oscuro

## 🧪 Posibles mejoras

Favoritos con preview guardado

Filtros y buscador en /generos

Player custom

## 📦 Resumen
Bueno, este proyecto fue hecho con la idea de entregar algo diferente y didáctico. Fue complejo porque no sabía por donde empezar y la verdad tuve algunos problemas con el index.html ya que no pude cambiar el nombre y el icono, tampoco las fuentes. Honestamente espero que se me pueda corregir eso, dado que intenté de muchas maneras y no supe que más intentar. Sin embargo estoy contenta con el desafío que represento este proyecto.

Muchas Gracias.
