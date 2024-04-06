"use client";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice =  createSlice({
    name: 'app',
    initialState: {
        isLogin: false,
        openModal: false,
        countCourseCart: 0,
        searchData: {},
        inforOrder: {}
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
        },
        countCart: (state, actions) => {
            state.countCourseCart = actions.payload
        },
        searchData: (state, action) => {
            state.searchData = action.payload
        },
        inforOrder: (state, action) => {
            state.inforOrder = action.payload
        },
    }
})

export const {
    isLogin, modalOpen, 
    modalClose, countCart, 
    searchData, inforOrder,
} = appSlice.actions

export default appSlice.reducer