# SERINGCO — versión 1

Web estática de arriendo de maquinaria para construcción en Calama, preparada para GitHub y Vercel. La raíz del sitio es esta carpeta `version 1`.

## Abrir y publicar

- Abre `index.html` para una vista rápida o sirve esta carpeta con un servidor estático.
- En Vercel, importa el repositorio como **Other / Static HTML**. No requiere instalación, build ni variables de entorno. Si el repositorio contiene `SERINGCO/version 1`, selecciona `SERINGCO/version 1` como directorio raíz; si subes solo el contenido de esta carpeta, usa `./`.
- El catálogo, los filtros y la selección funcionan en el navegador. La solicitud se prepara para `https://wa.me/56982791453`; no hay servidor de solicitudes ni pagos.

## Contenido

- `index.html`: estructura, contenido, SEO y mapa de Simón Bolívar 2057, Calama.
- `styles.css`: diseño adaptable y animaciones.
- `script.js`: 15 fichas, filtros, cotizador, menú y ventana de Instagram.
- `brief-marca.md`: fuentes, marcas verificadas por publicación, decisiones y límites.
- `assets/`: logo original, 15 imágenes individuales de equipos, imágenes ambientales y favicon; sin subcarpetas.

Las imágenes individuales de equipos se editaron a partir de publicaciones propias de SERINGCO para retirar el texto gráfico y mostrar la máquina completa. Las escenas ambientales son generadas. El detalle de cada fuente aparece en `brief-marca.md`.

## Antes de publicar comercialmente

1. Confirmar con SERINGCO el inventario, las variantes, los precios, las condiciones y la disponibilidad actual. La web no inventa tarifas.
2. Confirmar el dominio definitivo. `www.seringco.cl` aparece en Instagram, pero no resolvió DNS durante la investigación. Si cambia, actualizar `canonical`, `og:url`, `og:image` y JSON-LD en `index.html`.
3. Comprobar que el pin de Google Maps corresponde a **Simón Bolívar 2057**.
