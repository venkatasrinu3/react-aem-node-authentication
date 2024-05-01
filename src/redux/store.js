import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";
import { countHandler } from "./CountReducer";


console.log("This is the createSlice Instance",countHandler.reducer);
export const store = configureStore({
    reducer: {
        loginUserInfo : LoginReducer,
        counterReducer: countHandler.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false
      })
})
