import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": {"scheme": "", "netloc": "", "origin": "://", "path": "", "query": "", "query_parameters": {}, "fragment": "", "href": ""}, "route_id": ""}}, "reflex___state____state.reflex___istate___shared____shared_state_base_internal": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.xpmovies___components___auth_modal____auth_state": {"login_email_rx_state_": "", "login_password_rx_state_": "", "modal_abierto_rx_state_": false, "modo_rx_state_": "login", "nombre_usuario_rx_state_": "", "reg_email_rx_state_": "", "reg_nombre_rx_state_": "", "reg_password_rx_state_": "", "reg_password2_rx_state_": "", "usuario_logueado_rx_state_": false}, "reflex___state____state.xpmovies___pages___pelicula____pelicula_state": {"pelicula_actual_rx_state_": {"id": 1, "titulo": "El Padrino", "genero": "Drama", "clasificacion": "R", "duracion": "2h 55min", "descripcion": "La historia de la familia Corleone, una de las más poderosas del crimen organizado en Nueva York.", "imagen": "https://i.pinimg.com/1200x/74/f4/65/74f465d3ada4455e2f6defbe0fe11f67.jpg", "calificacion": 5.0, "tandas": ["4:00 PM", "7:00 PM", "10:00 PM"], "estado": "activa", "anio": 1972}, "pelicula_id_rx_state_": 1}, "reflex___state____state.xpmovies___pages___reservas____reservas_state": {"asientos_seleccionados_rx_state_": [], "asientos_texto_rx_state_": "Ninguno seleccionado", "email_rx_state_": "", "nombre_rx_state_": "", "pelicula_id_rx_state_": 1, "tanda_actual_rx_state_": "", "telefono_rx_state_": "", "total_asientos_rx_state_": 0, "total_precio_rx_state_": 0}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext({
  colorMode: defaultColorMode,
  resolvedColorMode: defaultColorMode === "dark" ? "dark" : "light",
  toggleColorMode: () => {},
  setColorMode: () => {},
});
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__reflex___istate___shared____shared_state_base_internal: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),reflex___state____state__xpmovies___components___auth_modal____auth_state: createContext(null),reflex___state____state__xpmovies___pages___pelicula____pelicula_state: createContext(null),reflex___state____state__xpmovies___pages___reservas____reservas_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      async function load() {
        const comp = await component();
        setComponent(() => comp);
      }
      load();
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__reflex___istate___shared____shared_state_base_internal, dispatch_reflex___state____state__reflex___istate___shared____shared_state_base_internal] = useReducer(applyDelta, initialState["reflex___state____state.reflex___istate___shared____shared_state_base_internal"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
const [reflex___state____state__xpmovies___components___auth_modal____auth_state, dispatch_reflex___state____state__xpmovies___components___auth_modal____auth_state] = useReducer(applyDelta, initialState["reflex___state____state.xpmovies___components___auth_modal____auth_state"])
const [reflex___state____state__xpmovies___pages___pelicula____pelicula_state, dispatch_reflex___state____state__xpmovies___pages___pelicula____pelicula_state] = useReducer(applyDelta, initialState["reflex___state____state.xpmovies___pages___pelicula____pelicula_state"])
const [reflex___state____state__xpmovies___pages___reservas____reservas_state, dispatch_reflex___state____state__xpmovies___pages___reservas____reservas_state] = useReducer(applyDelta, initialState["reflex___state____state.xpmovies___pages___reservas____reservas_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.reflex___istate___shared____shared_state_base_internal": dispatch_reflex___state____state__reflex___istate___shared____shared_state_base_internal,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
"reflex___state____state.xpmovies___components___auth_modal____auth_state": dispatch_reflex___state____state__xpmovies___components___auth_modal____auth_state,
"reflex___state____state.xpmovies___pages___pelicula____pelicula_state": dispatch_reflex___state____state__xpmovies___pages___pelicula____pelicula_state,
"reflex___state____state.xpmovies___pages___reservas____reservas_state": dispatch_reflex___state____state__xpmovies___pages___reservas____reservas_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__reflex___istate___shared____shared_state_base_internal,{value: reflex___state____state__reflex___istate___shared____shared_state_base_internal},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
createElement(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state,{value: reflex___state____state__xpmovies___components___auth_modal____auth_state},
createElement(StateContexts.reflex___state____state__xpmovies___pages___pelicula____pelicula_state,{value: reflex___state____state__xpmovies___pages___pelicula____pelicula_state},
createElement(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state,{value: reflex___state____state__xpmovies___pages___reservas____reservas_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    ))))))))
  )
}