import { useReducer } from "react";
import ComplexReducerInstance from "./ComplexReducerInstance";
import "./UseReducerInstance.scss";
import { useNavigate, Outlet } from "react-router-dom";


const initialState = {
    count: 0,
    name: ""
}
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1
            }
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            }
        case "changeName":
            return {
                ...state,
                name: action.payload
            }
        case "reset":
            return initialState;
        default:
            return state;
    }
}
const UseReducerInstance = () => {
    const navigate = useNavigate();
    let dispatch = (type, payload) => {
        return changedispatch({ type, payload })
    }
    const [state, changedispatch] = useReducer(reducer, initialState);
    return (
        <div className="reducer-wrapper">
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            <input type="text" value={state.name} onChange={(e) => dispatch("changeName", e.target.value)} />
            <h3>Count is {state.count}</h3>
            <h2>My name is {state.name}</h2>
            <button className="complex-reducer" onClick={() => navigate("complex-reducer")}>Try Complex reducers</button>
            <Outlet />
        </div>
    )
}
export default UseReducerInstance;