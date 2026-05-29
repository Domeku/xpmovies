
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_ff6b8f40342866e8471e14d4884f3a66 = memo(({children}) => {
    const reflex___state____state__xpmovies___pages___reservas____reservas_state = useContext(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "0.55em", ["color"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("A6") ? "#FFFFFF" : "#AAAAAA"), ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter" })},children)
    )
});
