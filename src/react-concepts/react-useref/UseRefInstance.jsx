import { useRef, useState } from "react"
const UseRefInstance = () => {
    const inputRef = useRef();
    const checkboxRef = useRef();
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <h4>React useRef hook is used to get the instance Object of the HTML dom element </h4>
            <input type="text" ref={inputRef} />
            <input type="checkbox" value={checked} ref={checkboxRef} onChange={()=>{
                console.log(checkboxRef.current.checked)
            }}/>
            <button onClick={() => {
                inputRef.current.focus()
                console.log(inputRef)
            }}>Check the Reference Object</button>
        </div>
    )
}
export default UseRefInstance