// 리듀서를 받아서 store를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";

// 리듀서 불러오기
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
