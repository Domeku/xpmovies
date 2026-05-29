
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_e3644aae72832577abb8475332d73ff9 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_8448ab3bfc8a10d96a6ba7e6821ff608 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.cerrar_sesion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{css:({ ["backgroundColor"] : "transparent", ["color"] : "#AAAAAA", ["border"] : "1px solid #AAAAAA", ["borderRadius"] : "6px", ["padding"] : "8px 16px", ["fontSize"] : "0.85em", ["fontFamily"] : "Inter", ["--default-font-family"] : "Inter", ["cursor"] : "pointer", ["&:hover"] : ({ ["color"] : "#FFFFFF", ["borderColor"] : "#FFFFFF" }) }),onClick:on_click_8448ab3bfc8a10d96a6ba7e6821ff608},children)
    )
});
