
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_468725269a09c292ecebed81281aba6f = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_30562cf007ed8e97fef0b409f29c1fe7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.cambiar_modo", ({ ["nuevo_modo"] : "registro" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#8B0000", ["fontSize"] : "0.85em", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["fontWeight"] : "600", ["cursor"] : "pointer", ["textDecoration"] : "underline", ["&:hover"] : ({ ["color"] : "#A50000" }) }),onClick:on_click_30562cf007ed8e97fef0b409f29c1fe7},children)
    )
});
