import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated", // 'checking', 'authenticated', 'not-authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
    },
    reducers: {
        login(state, action) {
            state.status = "authenticated";
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
        },
        logout(state) {
            state.status = "not-authenticated";
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
        },
        checkingCredentials(state) {
            state.status = "checking";
        },
    },
});

export const { login, logout, checkingCredentials} = authSlice.actions;
