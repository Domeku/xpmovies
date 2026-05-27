# 🎬 XP Movies — Plataforma Web de Cine

![XP Movies](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=400&fit=crop)

## 📋 Descripción del Proyecto

**XP Movies** es una plataforma web de cine desarrollada con **Reflex** y **Python**.

A diferencia de los cines tradicionales, XP Movies no proyecta estrenos.
Nos especializamos en presentar cada semana una cartelera cuidadosamente
seleccionada con las **mejores películas de la historia del cine**, para que
puedas verlas o revivirlas con la mejor calidad de imagen y sonido.

### ✨ Funcionalidades

- 🎥 Cartelera semanal con las mejores películas de la historia
- 🔍 Buscador de películas
- 🎞️ Página de descripción con detalles, itinerario y tandas
- 💺 Selección visual de asientos por sala y tanda
- 🔐 Sistema de login y registro de usuarios
- 📱 Diseño responsive (adaptable a móvil y escritorio)
- 🗓️ Sección de películas próximamente

---

## 🛠️ Tecnologías Utilizadas

### Frontend
| Tecnología | Uso |
|------------|-----|
| [Reflex](https://reflex.dev) | Framework web en Python |
| [Poetry](https://python-poetry.org) | Gestor de dependencias |
| Python 3.12 | Lenguaje principal |
| Google Fonts | Fuentes (Bebas Neue, Inter) |

### Backend *(trabajo de compañero)*
| Tecnología | Uso |
|------------|-----|
| FastAPI | API REST |
| MySQL | Base de datos |
| SQLAlchemy | ORM |

---

## 🚀 Cómo Instalar y Ejecutar

### Requisitos previos
- Python 3.12+
- Poetry 2.x
- Node.js 20+
- Git

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/Domeku/xpmovies.git
cd xpmovies
```

**2. Instalar dependencias**
```bash
poetry install
```

**3. Ejecutar el proyecto**
```bash
poetry run reflex run
```

**4. Abrir en el navegador**
http://localhost:3000

---

## 🌿 Flujo de Trabajo Git (GitFlow)

main
├── frontend    ← Rama de desarrollo del frontend (este repo)
└── backend     ← Rama de desarrollo del backend (compañero)
- Todos los cambios del frontend se hacen en la rama `frontend`
- Al finalizar el proyecto se hace merge a `main`
- Los commits siguen el formato: `feat:`, `fix:`, `docs:`

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Negro fondo | `#0A0A0A` | Fondo principal |
| Negro card | `#111111` | Tarjetas y componentes |
| Rojo principal | `#8B0000` | Botones y acentos |
| Rojo hover | `#A50000` | Efecto hover |
| Blanco | `#FFFFFF` | Texto principal |
| Gris texto | `#AAAAAA` | Texto secundario |

---

## 👥 Créditos

| Rol | Nombre | Responsabilidad |
|-----|--------|-----------------|
| Frontend | Damian | Diseño y desarrollo visual con Reflex |
| Backend | Elvin | API REST, base de datos MySQL |

---

## 🔗 Enlaces Útiles

- [Reflex Documentation](https://reflex.dev/docs)
- [Poetry Documentation](https://python-poetry.org/docs)
- [GitHub Repository](https://github.com/TU-USUARIO/xpmovies)

---

*Proyecto Final — Desarrollo Web | 2025*
