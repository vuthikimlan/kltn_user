"use client";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice =  createSlice({
    name: 'app',
    initialState: {
        isLogin: false,
        openModal: false
    }, 
    reducers: {
        isLogin: (state, actions) => {
            state.isLogin = actions.payload
        },
        modalOpen: (state) => {
            state.openModal = true
        },
        modalClose: (state) => {
            state.openModal = false
        }
    }
})

export const {isLogin, modalOpen, modalClose } = appSlice.actions

export default appSlice.reducer