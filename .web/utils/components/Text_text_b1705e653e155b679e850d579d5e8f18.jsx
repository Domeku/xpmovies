
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_b1705e653e155b679e850d579d5e8f18 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_4b0ca40a570efa48951cafa560c7a132 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.cambiar_modo", ({ ["nuevo_modo"] : "login" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#8B0000", ["fontSize"] : "0.85em", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["fontWeight"] : "600", ["cursor"] : "pointer", ["textDecoration"] : "underline", ["&:hover"] : ({ ["color"] : "#A50000" }) }),onClick:on_click_4b0ca40a570efa48951cafa560c7a132},children)
    )
});
