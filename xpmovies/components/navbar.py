# navbar.py
# Este archivo construye la barra de navegación que aparecerá
# en la parte superior de TODAS las páginas de XP Movies.

import reflex as rx
from xpmovies.styles.theme import (
    NEGRO_NAVBAR, ROJO_PRINCIPAL, BLANCO, GRIS_TEXTO,
    BOTON_PRIMARIO, BOTON_SECUNDARIO, FUENTE_PRINCIPAL, FUENTE_SECUNDARIA
)


def navbar() -> rx.Component:
    # rx.hstack = acomoda los elementos en fila horizontal
    # rx.vstack = acomoda los elementos en columna vertical
    # rx.box   = una caja contenedora (como un div en HTML)
    # rx.text  = texto
    # rx.link  = enlace clickeable

    return rx.box(
        rx.hstack(
            # ── LOGO ──────────────────────────────────────────────
            # El logo es simplemente el nombre "XP MOVIES" en rojo
            rx.link(
                rx.hstack(
                    rx.text(
                        "XP",
                        color=ROJO_PRINCIPAL,
                        font_size="1.8em",
                        font_weight="bold",
                        font_family=FUENTE_PRINCIPAL,
                        letter_spacing="2px",
                    ),
                    rx.text(
                        "MOVIES",
                        color=BLANCO,
                        font_size="1.8em",
                        font_weight="bold",
                        font_family=FUENTE_PRINCIPAL,
                        letter_spacing="2px",
                    ),
                    spacing="1",
                ),
                href="/",  # Al hacer clic va a la página de inicio
                text_decoration="none",
            ),

            # ── MENÚ DE NAVEGACIÓN ────────────────────────────────
            rx.hstack(
                rx.link(
                    "Inicio",
                    href="/",
                    color=GRIS_TEXTO,
                    font_family=FUENTE_SECUNDARIA,
                    font_size="0.95em",
                    text_decoration="none",
                    _hover={"color": BLANCO},
                ),
                rx.link(
                    "Cartelera",
                    href="/cartelera",
                    color=GRIS_TEXTO,
                    font_family=FUENTE_SECUNDARIA,
                    font_size="0.95em",
                    text_decoration="none",
                    _hover={"color": BLANCO},
                ),
                rx.link(
                    "Próximamente",
                    href="/proximamente",
                    color=GRIS_TEXTO,
                    font_family=FUENTE_SECUNDARIA,
                    font_size="0.95em",
                    text_decoration="none",
                    _hover={"color": BLANCO},
                ),
                spacing="6",
                # En pantallas pequeñas ocultamos el menú
                display=["none", "none", "flex"],
            ),

            # ── BOTONES DE SESIÓN ─────────────────────────────────
            # Por ahora estos botones no hacen nada funcional,
            # tu compañero de backend les dará vida después.
            rx.hstack(
                rx.button(
                    "Registrarse",
                    **BOTON_SECUNDARIO,
                    size="2",
                ),
                rx.button(
                    "Iniciar Sesión",
                    **BOTON_PRIMARIO,
                    size="2",
                ),
                spacing="3",
            ),

            # justify="between" separa el logo a la izquierda
            # y los botones a la derecha
            justify="between",
            align="center",
            width="100%",
            padding_x="40px",
            padding_y="16px",
        ),

        # Estilos del contenedor principal de la navbar
        background_color=NEGRO_NAVBAR,
        width="100%",
        position="sticky",   # Se queda fija arriba al hacer scroll
        top="0",
        z_index="100",       # Se mantiene por encima de todo lo demás
        border_bottom=f"1px solid #1a1a1a",
    )