
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_6115a7a9ae0b6292b2d27a9ba86bf667 = memo(({children}) => {
    const reflex___state____state__xpmovies___pages___reservas____reservas_state = useContext(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state)



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "0.55em", ["color"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("D7") ? "#FFFFFF" : "#AAAAAA"), ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter" })},children)
    )
});
