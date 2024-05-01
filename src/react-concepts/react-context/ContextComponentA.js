import { useState } from "react";
import ContextComponentB from "./ContextComponentB";
import { NameContextProvider } from "./utils/ContextInstances";
const ContextComponentA = () => {
    const [details, setDetails] = useState({name:"Srivatsava",age:25,gender:"Male",})
    return(
        <NameContextProvider value={details}>
            <h4>hi Ia m Component A</h4>
            <ContextComponentB />
        </NameContextProvider>

    )
}

export default ContextComponentA;