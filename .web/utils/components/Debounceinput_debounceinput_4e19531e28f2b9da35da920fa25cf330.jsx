
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {TextField as RadixThemesTextField} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Debounceinput_debounceinput_4e19531e28f2b9da35da920fa25cf330 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_9c53a291e6ffd43d2dddd5191230cbc8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.set_reg_password", ({ ["v"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__xpmovies___components___auth_modal____auth_state = useContext(StateContexts.reflex___state____state__xpmovies___components___auth_modal____auth_state)



    return(
        jsx(DebounceInput,{css:({ ["backgroundColor"] : "#1a1a1a", ["color"] : "#FFFFFF", ["border"] : "1px solid #222222", ["borderRadius"] : "6px", ["padding"] : "11px 14px", ["width"] : "100%", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["fontSize"] : "0.9em", ["&:placeholder"] : ({ ["color"] : "#AAAAAA" }), ["&:focus"] : ({ ["borderColor"] : "#8B0000", ["outline"] : "none" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9c53a291e6ffd43d2dddd5191230cbc8,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",type:"password",value:(isNotNullOrUndefined(reflex___state____state__xpmovies___components___auth_modal____auth_state.reg_password_rx_state_) ? reflex___state____state__xpmovies___components___auth_modal____auth_state.reg_password_rx_state_ : "")},)
    )
});
