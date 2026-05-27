# reservas.py
import reflex as rx
from xpmovies.components.navbar import navbar
from xpmovies.components.footer import footer
from xpmovies.pages.mock_data import PELICULAS
from xpmovies.styles.theme import (
    NEGRO_FONDO, NEGRO_CARD, ROJO_PRINCIPAL, ROJO_HOVER,
    BLANCO, GRIS_TEXTO, GRIS_BORDE, FUENTE_PRINCIPAL,
    FUENTE_SECUNDARIA, TITULO_SECCION, BOTON_PRIMARIO,
    BOTON_SECUNDARIO, PAGINA_BASE
)

FILAS = ["A", "B", "C", "D", "E", "F", "G", "H"]
COLUMNAS = list(range(1, 11))
PRECIO_ASIENTO = 350
ASIENTOS_OCUPADOS: list[str] = []


# ─── STATE ────────────────────────────────────────────────────────────
class ReservasState(rx.State):
    asientos_seleccionados: list[str] = []
    pelicula_id: int = 1
    tanda_actual: str = ""
    nombre: str = ""
    email: str = ""
    telefono: str = ""

    def on_load(self, pid: int, tanda: str):
        # Esta función se llama CADA VEZ que el usuario entra a la página.
        # Limpia los asientos seleccionados y configura la película y tanda.
        # Así al cambiar de sala o tanda siempre empieza limpio.
        self.asientos_seleccionados = []
        self.pelicula_id = pid
        self.tanda_actual = tanda
        self.nombre = ""
        self.email = ""
        self.telefono = ""

    @rx.var
    def total_asientos(self) -> int:
        return len(self.asientos_seleccionados)

    @rx.var
    def total_precio(self) -> int:
        return len(self.asientos_seleccionados) * PRECIO_ASIENTO

    @rx.var
    def asientos_texto(self) -> str:
        if not self.asientos_seleccionados:
            return "Ninguno seleccionado"
        return ", ".join(sorted(self.asientos_seleccionados))

    def toggle_asiento(self, asiento: str):
        if asiento in self.asientos_seleccionados:
            self.asientos_seleccionados = [
                a for a in self.asientos_seleccionados if a != asiento
            ]
        else:
            self.asientos_seleccionados = self.asientos_seleccionados + [asiento]

    def set_nombre(self, value: str):
        self.nombre = value

    def set_email(self, value: str):
        self.email = value

    def set_telefono(self, value: str):
        self.telefono = value


# ─── LEYENDA ──────────────────────────────────────────────────────────
def leyenda_asientos() -> rx.Component:
    def item(color, texto):
        return rx.hstack(
            rx.box(width="20px", height="20px", background_color=color,
                   border_radius="4px", flex_shrink="0"),
            rx.text(texto, color=GRIS_TEXTO, font_family=FUENTE_SECUNDARIA,
                    font_size="0.85em"),
            spacing="2", align="center",
        )
    return rx.hstack(
        item("#1a1a1a", "Disponible"),
        item(ROJO_PRINCIPAL, "Seleccionado"),
        item("#444444", "Ocupado"),
        spacing="6", flex_wrap="wrap", justify_content="center",
    )


# ─── ASIENTO INDIVIDUAL ───────────────────────────────────────────────
def asiento(fila: str, columna: int) -> rx.Component:
    codigo = f"{fila}{columna}"
    ocupado = codigo in ASIENTOS_OCUPADOS

    if ocupado:
        return rx.box(
            rx.text(codigo, font_size="0.55em", color="#666666",
                    font_family=FUENTE_SECUNDARIA),
            width="42px", height="38px", background_color="#2a2a2a",
            border_radius="6px 6px 3px 3px", border="1px solid #333333",
            display="flex", align_items="center", justify_content="center",
            cursor="not-allowed", title=f"Asiento {codigo} - Ocupado",
        )

    return rx.box(
        rx.text(
            codigo, font_size="0.55em",
            color=rx.cond(
                ReservasState.asientos_seleccionados.contains(codigo),
                BLANCO, GRIS_TEXTO,
            ),
            font_family=FUENTE_SECUNDARIA,
        ),
        width="42px", height="38px",
        background_color=rx.cond(
            ReservasState.asientos_seleccionados.contains(codigo),
            ROJO_PRINCIPAL, "#1a1a1a",
        ),
        border_radius="6px 6px 3px 3px",
        border=rx.cond(
            ReservasState.asientos_seleccionados.contains(codigo),
            f"1px solid {ROJO_HOVER}",
            f"1px solid {GRIS_BORDE}",
        ),
        display="flex", align_items="center", justify_content="center",
        cursor="pointer",
        on_click=ReservasState.toggle_asiento(codigo),
        title=f"Asiento {codigo}",
        _hover={
            "background_color": rx.cond(
                ReservasState.asientos_seleccionados.contains(codigo),
                ROJO_HOVER, "#2a2a2a",
            ),
            "transition": "all 0.15s ease",
        },
        transition="all 0.15s ease",
    )


# ─── MAPA DE ASIENTOS ─────────────────────────────────────────────────
def mapa_asientos() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.box(width="4px", height="32px",
                       background_color=ROJO_PRINCIPAL, border_radius="2px"),
                rx.text("SELECCIONA TUS ASIENTOS", **TITULO_SECCION),
                spacing="3", align="center",
            ),
            rx.box(
                rx.text("🎬  PANTALLA", color=GRIS_TEXTO, font_size="0.8em",
                        font_family=FUENTE_PRINCIPAL, letter_spacing="4px"),
                width="80%", max_width="500px", text_align="center",
                padding_y="10px",
                background="linear-gradient(180deg, #333333 0%, #1a1a1a 100%)",
                border_radius="4px", margin_bottom="20px",
            ),
            leyenda_asientos(),
            rx.vstack(
                *[
                    rx.hstack(
                        rx.text(fila, color=GRIS_TEXTO, font_size="0.8em",
                                font_family=FUENTE_SECUNDARIA,
                                width="20px", text_align="center"),
                        *[asiento(fila, col) for col in COLUMNAS],
                        spacing="2", align="center",
                    )
                    for fila in FILAS
                ],
                spacing="2",
            ),
            spacing="5", align="center", width="100%",
        ),
        background_color=NEGRO_CARD, border=f"1px solid {GRIS_BORDE}",
        border_radius="12px", padding="30px", overflow_x="auto",
    )


# ─── FORMULARIO ───────────────────────────────────────────────────────
def formulario_contacto() -> rx.Component:
    def campo(label, placeholder, value, on_change, tipo="text"):
        return rx.vstack(
            rx.text(label, color=BLANCO, font_size="0.9em",
                    font_weight="600", font_family=FUENTE_SECUNDARIA),
            rx.input(
                placeholder=placeholder, value=value,
                on_change=on_change, type=tipo,
                background_color="#1a1a1a", color=BLANCO,
                border=f"1px solid {GRIS_BORDE}", border_radius="6px",
                padding="12px 16px", width="100%",
                font_family=FUENTE_SECUNDARIA,
                _placeholder={"color": GRIS_TEXTO},
                _focus={"border_color": ROJO_PRINCIPAL, "outline": "none"},
            ),
            align_items="start", spacing="1", width="100%",
        )

    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.box(width="4px", height="32px",
                       background_color=ROJO_PRINCIPAL, border_radius="2px"),
                rx.text("DATOS DE CONTACTO", **TITULO_SECCION),
                spacing="3", align="center",
            ),
            campo("Nombre completo", "Ej: Juan Pérez",
                  ReservasState.nombre, ReservasState.set_nombre),
            campo("Correo electrónico", "Ej: juan@email.com",
                  ReservasState.email, ReservasState.set_email, "email"),
            campo("Teléfono", "Ej: 809-555-0000",
                  ReservasState.telefono, ReservasState.set_telefono, "tel"),
            align_items="start", spacing="4", width="100%",
        ),
        background_color=NEGRO_CARD, border=f"1px solid {GRIS_BORDE}",
        border_radius="12px", padding="30px", width="100%",
    )


# ─── RESUMEN DE PAGO ──────────────────────────────────────────────────
def resumen_pago(pelicula: dict, tanda: str) -> rx.Component:
    def fila(etiqueta, valor):
        return rx.hstack(
            rx.text(etiqueta, color=GRIS_TEXTO, font_family=FUENTE_SECUNDARIA,
                    font_size="0.9em"),
            rx.text(valor, color=BLANCO, font_family=FUENTE_SECUNDARIA,
                    font_size="0.9em", font_weight="600"),
            justify="between", width="100%",
            border_bottom=f"1px solid {GRIS_BORDE}", padding_y="10px",
        )

    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.box(width="4px", height="32px",
                       background_color=ROJO_PRINCIPAL, border_radius="2px"),
                rx.text("RESUMEN DE PAGO", **TITULO_SECCION),
                spacing="3", align="center",
            ),
            # Tanda viene directo del dict de Python, no del State
            # así siempre muestra la hora correcta sin importar nada
            fila("Película", pelicula["titulo"]),
            fila("Tanda", tanda),
            fila("Asientos", ReservasState.asientos_texto),
            fila("Cantidad",
                 ReservasState.total_asientos.to_string() + " asiento(s)"),
            fila("Precio por asiento", f"RD$ {PRECIO_ASIENTO}"),
            rx.hstack(
                rx.text("TOTAL", color=BLANCO, font_family=FUENTE_PRINCIPAL,
                        font_size="1.2em", font_weight="bold",
                        letter_spacing="1px"),
                rx.text(
                    "RD$ " + ReservasState.total_precio.to_string(),
                    color=ROJO_PRINCIPAL, font_family=FUENTE_PRINCIPAL,
                    font_size="1.5em", font_weight="bold",
                ),
                justify="between", width="100%", padding_top="15px",
            ),
            rx.box(
                rx.text("💳  Método de Pago", color=BLANCO, font_weight="bold",
                        font_family=FUENTE_SECUNDARIA, font_size="0.9em",
                        margin_bottom="8px"),
                rx.text(
                    "El pago se realiza en taquilla al momento de llegar al cine "
                    "o mediante transferencia bancaria. Una vez confirmada tu reserva "
                    "recibirás un correo con los detalles.",
                    color=GRIS_TEXTO, font_family=FUENTE_SECUNDARIA,
                    font_size="0.82em", line_height="1.6",
                ),
                background_color="#1a1a1a", border_radius="8px",
                padding="16px", border=f"1px solid {GRIS_BORDE}",
                margin_top="10px",
            ),
            rx.button(
                "Confirmar Reserva", **BOTON_PRIMARIO,
                width="100%", size="3", margin_top="10px",
            ),
            rx.text(
                "* Tu compañero de backend conectará este botón a la base de datos.",
                color="#555555", font_size="0.75em",
                font_family=FUENTE_SECUNDARIA, text_align="center",
            ),
            align_items="start", spacing="2", width="100%",
        ),
        background_color=NEGRO_CARD, border=f"1px solid {GRIS_BORDE}",
        border_radius="12px", padding="30px", width="100%",
    )


# ─── PÁGINA COMPLETA ──────────────────────────────────────────────────
# Recibe la película y la tanda como datos de Python puro
# así no depende del State para mostrar la información correcta
def reservas_page(pelicula: dict, tanda: str) -> rx.Component:
    return rx.box(
        navbar(),
        rx.box(
            rx.vstack(
                rx.text("RESERVA TUS ASIENTOS", color=BLANCO,
                        font_size="2.5em", font_weight="bold",
                        font_family=FUENTE_PRINCIPAL, letter_spacing="2px"),
                rx.text(
                    f"{pelicula['titulo']}  •  {tanda}",
                    color=GRIS_TEXTO, font_family=FUENTE_SECUNDARIA,
                    font_size="1em",
                ),
                align="center", spacing="2",
            ),
            background_color="#0D0D0D", padding_x="40px", padding_y="40px",
            text_align="center", border_bottom=f"1px solid {GRIS_BORDE}",
        ),
        rx.box(
            rx.flex(
                rx.box(mapa_asientos(), flex="2", min_width="300px"),
                rx.vstack(
                    formulario_contacto(),
                    resumen_pago(pelicula, tanda),
                    spacing="6", flex="1", min_width="300px",
                ),
                gap="30px", flex_wrap="wrap",
                align_items="start", width="100%",
            ),
            padding_x="40px", padding_y="50px", width="100%",
        ),
        footer(),
        **PAGINA_BASE,
    )


# ─── PÁGINAS INDIVIDUALES POR PELÍCULA Y TANDA ────────────────────────
# on_load limpia los asientos cada vez que entras a la página
def _pagina(pid: int, tidx: int) -> rx.Component:
    p = PELICULAS[pid - 1]
    tanda = p["tandas"][tidx]
    return reservas_page(p, tanda)

def reservas_1_1(): return _pagina(1, 0)
def reservas_1_2(): return _pagina(1, 1)
def reservas_1_3(): return _pagina(1, 2)
def reservas_2_1(): return _pagina(2, 0)
def reservas_2_2(): return _pagina(2, 1)
def reservas_2_3(): return _pagina(2, 2)
def reservas_3_1(): return _pagina(3, 0)
def reservas_3_2(): return _pagina(3, 1)
def reservas_3_3(): return _pagina(3, 2)
def reservas_4_1(): return _pagina(4, 0)
def reservas_4_2(): return _pagina(4, 1)
def reservas_4_3(): return _pagina(4, 2)
def reservas_5_1(): return _pagina(5, 0)
def reservas_5_2(): return _pagina(5, 1)
def reservas_5_3(): return _pagina(5, 2)
def reservas_6_1(): return _pagina(6, 0)
def reservas_6_2(): return _pagina(6, 1)
def reservas_6_3(): return _pagina(6, 2)
def reservas_7_1(): return _pagina(7, 0)
def reservas_7_2(): return _pagina(7, 1)
def reservas_7_3(): return _pagina(7, 2)
def reservas_8_1(): return _pagina(8, 0)
def reservas_8_2(): return _pagina(8, 1)
def reservas_8_3(): return _pagina(8, 2)