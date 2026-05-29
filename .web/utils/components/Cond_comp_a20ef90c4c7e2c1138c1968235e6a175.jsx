
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_a20ef90c4c7e2c1138c1968235e6a175 = memo(({children}) => {
    const reflex___state____state__xpmovies___components___auth_modal____auth_state = useContext(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state)



    return(
        (reflex___state____state__xpmovies___components___auth_modal____auth_state.usuario_logueado_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
