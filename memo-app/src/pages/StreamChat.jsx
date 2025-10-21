import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

// chat 객체 불러오기
import { chat } from "../utils/genai";

export default function StreamChat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function generateAiContent(currentPrompt) {
    try {
      // AI 응답 생성
      const stream = await chat.sendMessageStream({
        message: currentPrompt,
      });

      // 스트림 응답을 위한 빈 AI 메시지 먼저 추가
      setMessages((prev) => [...prev, { role: "ai", content: "" }]);

      // 청크 누적용 문자열 변수
      let accumulatedResponse = "";

      for await (const chunk of stream) {
        // 스트림 청크 누적
        accumulatedResponse += chunk.text || "";

        // 메시지 상태 변경(함수형 업데이트)
        // prev 매개변수 : 이전 상태 데이터
        setMessages((prev) => {
          // newMessages : 새로운 배열 생성(복사)
          const newMessages = [...prev];

          // lastMessage : 마지막 메시지 메모리 주소 참조
          const lastMessage = newMessages[newMessages.length - 1];

          // AI 메시지인 경우 누적된 청크로 마지막 메세지 변경
          if (lastMessage["role"] === "ai") {
            lastMessage.content = accumulatedResponse;
          }

          // 마지막 메세지만 변경된 새로운 배열 반환
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading === true || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    // currentPrompt 변수
    const currentPrompt = prompt;
    // 상태 prompt 초기화
    setPrompt("");
    setIsLoading(true);
    await generateAiContent(currentPrompt);
    setIsLoading(false);
  }

  return (
    <>
      <MessageList messages={messages} />

      <ChatForm
        prompt={prompt}
        setPrompt={setPrompt}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </>
  );
}
