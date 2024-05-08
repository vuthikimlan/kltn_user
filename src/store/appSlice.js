"use client";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialCount = Cookies.get("cartCount") || 0;

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLogin: false,
    openModal: false,
    countCourseCart: initialCount,
    searchData: {},
    inforOrder: {},
    profileUser: {},
  },
  reducers: {
    isLogin: (state, actions) => {
      state.isLogin = actions.payload;
    },
    modalOpen: (state) => {
      state.openModal = true;
    },
    modalClose: (state) => {
      state.openModal = false;
    },
    countCart: (state, actions) => {
      state.countCourseCart = actions.payload;
    },
    searchData: (state, action) => {
      state.searchData = action.payload;
    },
    inforOrder: (state, action) => {
      state.inforOrder = action.payload;
    },
    profileUser: (state, action) => {
      state.profileUser = action.payload;
    },
  },
});

export const {
  isLogin,
  modalOpen,
  modalClose,
  countCart,
  searchData,
  inforOrder,
  profileUser,
} = appSlice.actions;

export default appSlice.reducer;
