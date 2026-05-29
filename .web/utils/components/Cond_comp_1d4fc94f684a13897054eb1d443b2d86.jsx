
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_1d4fc94f684a13897054eb1d443b2d86 = memo(({children}) => {
    const reflex___state____state__xpmovies___components___auth_modal____auth_state = useContext(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state)



    return(
        (reflex___state____state__xpmovies___components___auth_modal____auth_state.modal_abierto_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
