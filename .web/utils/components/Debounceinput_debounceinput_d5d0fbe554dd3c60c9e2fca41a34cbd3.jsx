
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {TextField as RadixThemesTextField} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Debounceinput_debounceinput_d5d0fbe554dd3c60c9e2fca41a34cbd3 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_6b6a0e885d6a8db02580aa6d7357c7f4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.set_login_email", ({ ["v"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__xpmovies___components___auth_modal____auth_state = useContext(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state)



    return(
        jsx(DebounceInput,{css:({ ["backgroundColor"] : "#1a1a1a", ["color"] : "#FFFFFF", ["border"] : "1px solid #222222", ["borderRadius"] : "6px", ["padding"] : "11px 14px", ["width"] : "100%", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["fontSize"] : "0.9em", ["&:placeholder"] : ({ ["color"] : "#AAAAAA" }), ["&:focus"] : ({ ["borderColor"] : "#8B0000", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_6b6a0e885d6a8db02580aa6d7357c7f4,placeholder:"tu@email.com",type:"email",value:(isNotNullOrUndefined(reflex___state____state__xpmovies___components___auth_modal____auth_state.login_email_rx_state_) ? reflex___state____state__xpmovies___components___auth_modal____auth_state.login_email_rx_state_ : "")},)
    )
});
