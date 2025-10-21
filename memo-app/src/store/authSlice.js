// Redux Toolkit에서 createSlice, createAsyncThunk를 가져옴 (비동기 작업과 슬라이스 생성용)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// axios는 HTTP 요청을 보낼 때 사용하는 라이브러리
import axios from "axios";

// 환경 변수에서 Supabase API URL과 익명 키(anon key)를 가져옴
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

/* 
  회원가입 비동기 처리
  - createAsyncThunk: 비동기 로직을 Redux에서 처리할 수 있도록 도와줌
  - 첫 번째 인자: 액션 타입
  - 두 번째 인자: 비동기 함수 정의
*/
const signup = createAsyncThunk(
  "auth/signup", // 액션 타입 이름
  async (data, { rejectWithValue }) => {
    try {
      // axios 요청 구성
      const config = {
        url: `${SUPABASE_URL}/auth/v1/signup`, // Supabase 회원가입 API URL
        method: "POST", // POST 요청
        headers: {
          "Content-type": "application/json", // 요청 본문은 JSON 형식
          apikey: SUPABASE_ANON_KEY, // Supabase에서 발급한 익명 키
        },
        data: {
          email: data["email"], // 사용자 입력 이메일
          password: data["password"], // 사용자 입력 비밀번호
        },
      };

      // axios로 HTTP 요청을 보냄 (비동기)
      const response = await axios(config);

      // 성공하면 서버 응답 데이터를 리턴
      return response["data"];
    } catch (error) {
      // 실패 시, 에러 응답 데이터를 리턴 (rejected 액션에서 처리됨)
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

/* 
  로그인 비동기 처리
  - Supabase의 로그인 API는 /token 엔드포인트 사용
  - 비밀번호 기반 로그인 방식: grant_type=password
*/
const login = createAsyncThunk(
  "auth/login", // 액션 타입
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`, // 로그인 API URL
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data.email, // 입력된 이메일
          password: data.password, // 입력된 비밀번호
        },
      };

      // 로그인 요청 → access_token 등 포함된 응답 받음
      const response = await axios(config);

      console.log(response.data); // 디버깅용 출력

      return response.data; // 로그인 성공 시 응답 데이터 리턴
    } catch (error) {
      return rejectWithValue(error.response.data); // 실패 시 에러 리턴
    }
  }
);

/* 
  로그아웃 비동기 처리
  - Supabase 로그아웃 API 호출
  - Authorization 헤더에 토큰 포함 필요
*/
const logout = createAsyncThunk(
  "auth/logout", // 액션 타입
  async (_, { rejectWithValue, getState }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/logout`, // 로그아웃 API URL
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${getState().auth.token}`, // 현재 저장된 토큰을 가져와 헤더에 포함
        },
      };

      const response = await axios(config); // 요청 실행
      return response.data; // 성공 시 응답 리턴
    } catch (error) {
      console.error(error); // 콘솔에 에러 출력 (디버깅용)
      return rejectWithValue(error["response"]["data"]); // 실패 시 에러 리턴
    }
  }
);

// 상태 초기값 설정
const initialState = {
  token: null, // 로그인 후 받은 토큰 저장
  error: null, // 에러 메시지 저장
  isSignup: false, // 회원가입 성공 여부
};

/*
  Redux 슬라이스 생성
  - 상태(state) + 리듀서 함수 + 액션 생성
*/
const authSlice = createSlice({
  name: "auth", // 슬라이스 이름 (액션 타입 접두사로 사용됨)
  initialState: initialState, // 초기 상태 설정
  reducers: {
    // 일반 액션: 회원가입 성공 상태를 다시 false로 초기화
    resetIsSignup: (state) => {
      state.isSignup = false;
    },
  },
  extraReducers: (builder) => {
    // signup 성공 시
    builder.addCase(signup.fulfilled, (state) => {
      state.isSignup = true; // 회원가입 성공 상태로 설정
    });

    // login 성공 시
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload["access_token"]; // 받은 토큰 저장
    });

    // logout 성공 시
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null; // 토큰 삭제 (로그아웃 처리)
    });

    // signup 실패 시
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.payload; // 에러 정보 저장
    });
  },
});

// 일반 액션 생성 함수 export
export const { resetIsSignup } = authSlice.actions;

// 리듀서 함수 export (store에 연결하기 위해)
export default authSlice.reducer;

// 비동기 액션들 export (컴포넌트에서 사용 가능하도록)
export { signup, login, logout };
