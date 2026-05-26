# xpmovies.py
# Este es el archivo principal de la aplicación.
# Aquí se registran todas las páginas y se configura la app.

import reflex as rx

# Importamos las páginas (por ahora están vacías, las llenaremos después)
# from xpmovies.pages.index import index_page
# from xpmovies.pages.pelicula import pelicula_page
# from xpmovies.pages.reservas import reservas_page

# Página temporal para verificar que la navbar y footer funcionan
from xpmovies.components.navbar import navbar
from xpmovies.components.footer import footer
from xpmovies.styles.theme import PAGINA_BASE


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.box(
            rx.text(
                "¡XP Movies funcionando!",
                color="white",
                font_size="2em",
                text_align="center",
                padding="100px",
            ),
        ),
        footer(),
        **PAGINA_BASE,
    )


app = rx.App()
app.add_page(index, route="/")