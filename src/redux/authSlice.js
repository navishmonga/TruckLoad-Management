import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: null,
        isSignedUp: null
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
        }
    }
})

export const { login, logout, signedUp, notsignedUp } = authSlice.actions
export default authSlice.reducer