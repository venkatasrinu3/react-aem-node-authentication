import { useContext } from "react";
import { nameContext} from "./utils/ContextInstances";
const ContextComponentD  = () => {
    let {name, age} = useContext(nameContext)
    return(
        <>
            Hi I am {name} {age} years old the 4th level descendant of ContextComponentA
        </>
    )
}

export default ContextComponentD;