// Redux Toolkit에서 createSlice 가져오기 (상태를 쉽게 만들 수 있게 도와주는 도구)
import { createSlice } from "@reduxjs/toolkit";

// 처음 시작할 때 기본 값(초기 상태)
const initialState = {
  memos: [], // 메모들을 담을 배열 (처음엔 아무 메모 없음)
  filter: "all", // 필터링 기준 (전체 메모 보여줌, 나중에 '완료'나 '미완료'로 바꿀 수 있음)
};

// 메모 기능을 담당하는 slice 만들기
const memoSlice = createSlice({
  name: "memo", // 이 slice의 이름 (redux devtools에서 이름으로 확인 가능)
  initialState, // 위에서 만든 초기 상태를 여기에 넣음
  reducers: {
    // 메모를 추가하는 함수
    addMemo(state, action) {
      // 메모 하나를 리스트에 추가함
      state.memos.push(action.payload); // action.payload는 새 메모 객체
    },

    // 메모 완료/미완료 상태를 바꾸는 함수
    toggleMemo(state, action) {
      // 해당 메모를 찾아서
      const memo = state.memos.find((m) => m.id === action.payload);
      // 찾았으면 isCompleted 상태를 반대로 바꿈 (true <-> false)
      if (memo) memo.isCompleted = !memo.isCompleted;
    },

    // 메모를 삭제하는 함수
    deleteMemo(state, action) {
      // 해당 메모만 제외하고 다시 배열 만들기 (filter 사용)
      state.memos = state.memos.filter((m) => m.id !== action.payload);
    },

    // 필터 상태를 바꾸는 함수 (all, completed, uncompleted)
    setFilter(state, action) {
      // 사용자가 선택한 필터로 변경
      state.filter = action.payload;
    },

    // 로컬스토리지에서 불러온 메모들을 상태에 넣는 함수
    loadMemos(state, action) {
      // 불러온 메모들로 전체 상태를 덮어씀
      state.memos = action.payload;
    },
  },
});

// 위에서 만든 함수들(action creator라고 불림)을 외부에서 쓸 수 있게 내보냄
export const { addMemo, toggleMemo, deleteMemo, setFilter, loadMemos } =
  memoSlice.actions;

// reducer를 export해서 store에 연결할 수 있게 함
export default memoSlice.reducer;
