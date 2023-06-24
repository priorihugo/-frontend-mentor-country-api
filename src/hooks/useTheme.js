import { useContext } from "react"
import {MyThemeContext} from "../context/MyThemeContext"


export const useTheme = ()=>{

    const {theme , toggle} = useContext(MyThemeContext);

    return {
        theme: theme,
        toggle: toggle,

    }


}