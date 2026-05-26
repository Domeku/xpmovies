# xpmovies.py
# Archivo principal que conecta todas las páginas de la app.

import reflex as rx
from xpmovies.pages.index import index_page


app = rx.App(
    # Aquí le decimos a Reflex que cargue las fuentes de Google
    # que definimos en theme.py (Bebas Neue e Inter)
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap",
    ],
)

app.add_page(index_page, route="/")