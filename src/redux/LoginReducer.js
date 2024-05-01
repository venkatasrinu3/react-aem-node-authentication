import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName:"",
    lastName:"",
    mobileNumber:"",
    emailId:"",
    count:0
}


const loginSlice  = createSlice({
    name: "logindata",
    initialState,
    reducers:{
        changestate:(state = initialState, action)=>{
            console.log("This ips action payload from reducer",action.payload)
            state.count+=action.payload.cnt
            for(let i in action.payload){
                state[i] = action.payload[i]
            }
        }
    }
})

console.log("This is the in initial state after update", initialState)
export default loginSlice.reducer;
export const loginAction = loginSlice.actions