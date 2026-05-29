
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_0deb50fabf7d9384dc63eb38331d4c25 = memo(({children}) => {
    const reflex___state____state__xpmovies___components___auth_modal____auth_state = useContext(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state)



    return(
        ((reflex___state____state__xpmovies___components___auth_modal____auth_state.modo_rx_state_?.valueOf?.() === "login"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});
