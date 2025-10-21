// React에서 useState, useEffect 훅을 가져옴 (상태 관리 및 생명주기 사용)
import { useState, useEffect } from "react";

// Redux에서 액션을 보내기 위한 dispatch 함수, 상태를 조회하는 useSelector 훅 가져옴
import { useDispatch, useSelector } from "react-redux";

// 우리가 만든 Redux 액션: 회원가입, 회원가입 성공 상태 초기화
import { signup, resetIsSignup } from "../store/authSlice";

// 페이지 이동을 위한 훅 (react-router-dom의 useNavigate)
import { useNavigate } from "react-router-dom";

// 회원가입 컴포넌트 시작
export default function Signup() {
  // 이메일 입력 값을 저장할 상태
  const [email, setEmail] = useState("");

  // 비밀번호 입력 값을 저장할 상태
  const [password, setPassword] = useState("");

  // Redux 액션을 실행할 수 있는 dispatch 함수 가져오기
  const dispatch = useDispatch();

  // 페이지 이동을 위한 navigate 함수 가져오기
  const navigate = useNavigate();

  // Redux 상태 중, 회원가입 성공 여부 가져오기
  const isSignup = useSelector((state) => state.auth.isSignup);

  // Redux 상태 중, 에러 메시지 가져오기
  const error = useSelector((state) => state.auth.error);

  // 폼 제출 시 실행되는 함수
  function handleSubmit(e) {
    e.preventDefault(); // 페이지 새로고침 방지
    dispatch(signup({ email, password })); // 회원가입 액션 실행 (입력한 email과 password 전달)
  }

  // 회원가입 성공 시 실행되는 효과
  useEffect(() => {
    if (isSignup) {
      alert("회원가입을 성공했습니다. 메일함을 확인해주세요."); // 알림 띄우기
      dispatch(resetIsSignup()); // isSignup 상태 초기화 (중복 알림 방지)
      navigate("/"); // 홈페이지로 이동
    }
  }, [isSignup, dispatch, navigate]); // isSignup 값이 바뀔 때마다 실행됨

  // 화면에 보여줄 UI 반환
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          회원가입
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* 회원가입 폼 */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 이메일 입력칸 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  id="email" // HTML에서 사용하는 고유 식별자
                  name="email"
                  type="email" // 입력 형식을 이메일로 제한
                  autoComplete="email" // 자동 완성 기능
                  required // 필수 입력
                  value={email} // 상태값과 연결 (controlled input)
                  onChange={(e) => setEmail(e.target.value)} // 입력값 변경 시 상태 업데이트
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* 비밀번호 입력칸 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password" // 입력 형식을 비밀번호로 설정 (**** 처리됨)
                  autoComplete="current-password"
                  required
                  value={password} // 상태값과 연결
                  onChange={(e) => setPassword(e.target.value)} // 입력 시 상태 업데이트
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* 제출 버튼 */}
            <div>
              <button
                type="submit" // 폼 제출
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                회원가입
              </button>
            </div>
          </form>

          {/* 에러 메시지 표시 */}
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error.message} {/* 에러 메시지 출력 */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
