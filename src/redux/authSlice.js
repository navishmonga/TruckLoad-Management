import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: null,
        isSignedUp: null,
        cookies:{}
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
        signedUp: (state)=>{
            state.isSignedUp = true
        },
        notsignedUp: (state)=>{
            state.isSignedUp = false
        },
        setCookies:(state,action)=>{
            state.cookies={...state.cookies,...action.payload}   
        }
    }
})

export const { login, logout, signedUp, notsignedUp,setCookies } = authSlice.actions
export default authSlice.reducer