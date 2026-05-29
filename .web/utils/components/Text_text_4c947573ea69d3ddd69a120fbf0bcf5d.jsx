
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Text_text_4c947573ea69d3ddd69a120fbf0bcf5d = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_1e2ec182a74d2303ade20445d21a6ef5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#AAAAAA", ["fontSize"] : "1.2em", ["cursor"] : "pointer", ["&:hover"] : ({ ["color"] : "#FFFFFF" }) }),onClick:on_click_1e2ec182a74d2303ade20445d21a6ef5},children)
    )
});
