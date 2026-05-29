
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_4babde5b4f43e431ce30eec39b9397de = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_5f1eabd3e3d0528826fcc802620eb44e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___pages___reservas____reservas_state.toggle_asiento", ({ ["asiento"] : "F8" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__xpmovies___pages___reservas____reservas_state = useContext(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "42px", ["height"] : "38px", ["backgroundColor"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("F8") ? "#8B0000" : "#1a1a1a"), ["borderRadius"] : "6px 6px 3px 3px", ["border"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("F8") ? "1px solid #A50000" : "1px solid #222222"), ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("F8") ? "#A50000" : "#2a2a2a"), ["transition"] : "all 0.15s ease" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_5f1eabd3e3d0528826fcc802620eb44e,title:"Asiento F8"},children)
    )
});
