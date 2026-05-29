
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_7cfc338f165322aa0fc98f5162af5656 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_5c65620c5427d9181cf6083e82faf75d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___pages___reservas____reservas_state.toggle_asiento", ({ ["asiento"] : "E1" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__xpmovies___pages___reservas____reservas_state = useContext(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state)



    return(
        jsx(RadixThemesBox,{css:({ ["width"] : "42px", ["height"] : "38px", ["backgroundColor"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("E1") ? "#8B0000" : "#1a1a1a"), ["borderRadius"] : "6px 6px 3px 3px", ["border"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("E1") ? "1px solid #A50000" : "1px solid #222222"), ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : (reflex___state____state__xpmovies___pages___reservas____reservas_state.asientos_seleccionados_rx_state_.includes("E1") ? "#A50000" : "#2a2a2a"), ["transition"] : "all 0.15s ease" }), ["transition"] : "all 0.15s ease" }),onClick:on_click_5c65620c5427d9181cf6083e82faf75d,title:"Asiento E1"},children)
    )
});
