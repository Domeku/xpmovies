
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_a54dfa9dc39b67deb539350d758e610b = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_bc00e189834d27ef121a39698771e472 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.abrir_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{css:({ ["backgroundColor"] : "#8B0000", ["color"] : "#FFFFFF", ["borderRadius"] : "6px", ["padding"] : "10px 24px", ["fontWeight"] : "bold", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["cursor"] : "pointer", ["border"] : "none", ["&:hover"] : ({ ["backgroundColor"] : "#A50000" }) }),onClick:on_click_bc00e189834d27ef121a39698771e472,size:"3"},children)
    )
});
