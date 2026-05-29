
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {TextField as RadixThemesTextField} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Debounceinput_debounceinput_f9c494b69b2aeda07b813147bf2f52de = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_b349ce6ca345649094b4a594c4c49eb4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___pages___reservas____reservas_state.set_email", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__xpmovies___pages___reservas____reservas_state = useContext(StateContexts.reflex___state____state__xpmovies___pages___reservas____reservas_state)



    return(
        jsx(DebounceInput,{css:({ ["backgroundColor"] : "#1a1a1a", ["color"] : "#FFFFFF", ["border"] : "1px solid #222222", ["borderRadius"] : "6px", ["padding"] : "12px 16px", ["width"] : "100%", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["&:placeholder"] : ({ ["color"] : "#AAAAAA" }), ["&:focus"] : ({ ["borderColor"] : "#8B0000", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_b349ce6ca345649094b4a594c4c49eb4,placeholder:"Ej: juan@email.com",type:"email",value:(isNotNullOrUndefined(reflex___state____state__xpmovies___pages___reservas____reservas_state.email_rx_state_) ? reflex___state____state__xpmovies___pages___reservas____reservas_state.email_rx_state_ : "")},)
    )
});
