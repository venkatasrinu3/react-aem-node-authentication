import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { countHandler, getData } from '../../redux/CountReducer';

const Counter = () => {
    const dispatch = useDispatch();
    const { count, data } = useSelector(state => state.counterReducer);
    const { increaseCount, decreaseCount, resetState } = countHandler.actions;
    return (
        <div className='d-flex flex-column' style={{ width: "300px" }}>
            <h1>Count is {count}</h1>
            <button className='btn btn-outline-primary' onClick={() => dispatch(increaseCount())}>Increase</button>
            <button className='btn btn-outline-danger my-3' onClick={() => dispatch(decreaseCount())}>Decrease</button>
            <button className='btn btn-outline-info' onClick={() => dispatch(resetState())}>Reset</button>
            <button className='mt-5 btn btn-warning' onClick={() => dispatch(getData())}>Call API</button>
        </div>
    )
}

export default Counter