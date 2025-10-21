// 로컬스토리지(LocalStorage)에 메모를 저장할 때 사용할 키(key) 이름을 "memos"로 정해줍니다.
// 이 키는 메모 데이터를 저장하고 꺼낼 때 사용할 이름표 같은 역할을 해요.
const MEMO_KEY = "memos";

// ⬇️ 메모들을 로컬스토리지에 저장하는 함수
export function saveMemosToLocalStorage(memos) {
  // JSON.stringify는 자바스크립트 객체나 배열을 문자열로 바꿔주는 역할을 해요.
  // localStorage는 문자열만 저장할 수 있어서 꼭 이 과정을 거쳐야 해요.
  localStorage.setItem(MEMO_KEY, JSON.stringify(memos));
  // 예를 들어, [{ id: 1, content: "공부하기" }] 라는 메모 배열이
  // '[{"id":1,"content":"공부하기"}]' 이렇게 바뀌어서 저장돼요.
}

// ⬇️ 로컬스토리지에 저장된 메모들을 꺼내오는 함수
export function getMemosFromLocalStorage() {
  // localStorage에서 "memos"라는 이름의 데이터를 꺼내와요.
  const memos = localStorage.getItem(MEMO_KEY);

  // 만약 memos가 null이 아니라면 (즉, 데이터가 있다면)
  // JSON.parse로 문자열을 다시 배열/객체로 바꿔서 돌려줘요.
  // 없다면(처음이라 비어있다면) 빈 배열 []을 돌려줘요.
  return memos ? JSON.parse(memos) : [];
}
