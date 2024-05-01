import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const stateObj = {
    count:0,
    data:[],
    isLoading:false,
    error:""
}

export const countHandler = createSlice({
    name:"HandleCount",
    initialState:stateObj,
    reducers:{
        increaseCount:(state)=>{
            state.count += 1
        },
        decreaseCount: (state) => {
            state.count -=1
        },
        resetState: ()=>stateObj,
        fetchDataRequest:(state)=>{
            state.isLoading = true;
        },
        fetchDataSuccess: (state, action)=>{
            state.data = action.payload;
            state.isLoading = false;
        },
        fetchDataFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

const {fetchDataRequest, fetchDataSuccess, fetchDataFailure} = countHandler.actions;

export const getData = () => async(dispatch) => {
    dispatch(fetchDataRequest());
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log("Practicing Redux-thunk",response);
        dispatch(fetchDataSuccess(response.data));
    }catch (e) {
        dispatch(fetchDataFailure(e));
    }

}