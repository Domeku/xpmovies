# xpmovies.py
import reflex as rx
from xpmovies.pages.index import index_page
from xpmovies.pages.pelicula import (
    pelicula_1, pelicula_2, pelicula_3, pelicula_4,
    pelicula_5, pelicula_6, pelicula_7, pelicula_8,
)

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap",
    ],
)

app.add_page(index_page, route="/")
app.add_page(pelicula_1, route="/pelicula/1")
app.add_page(pelicula_2, route="/pelicula/2")
app.add_page(pelicula_3, route="/pelicula/3")
app.add_page(pelicula_4, route="/pelicula/4")
app.add_page(pelicula_5, route="/pelicula/5")
app.add_page(pelicula_6, route="/pelicula/6")
app.add_page(pelicula_7, route="/pelicula/7")
app.add_page(pelicula_8, route="/pelicula/8")