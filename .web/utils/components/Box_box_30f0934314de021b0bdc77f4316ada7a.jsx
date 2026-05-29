
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_30f0934314de021b0bdc77f4316ada7a = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_1e2ec182a74d2303ade20445d21a6ef5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.xpmovies___components___auth_modal____auth_state.cerrar_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["background"] : "rgba(0,0,0,0.85)", ["zIndex"] : "200" }),onClick:on_click_1e2ec182a74d2303ade20445d21a6ef5},)
    )
});
