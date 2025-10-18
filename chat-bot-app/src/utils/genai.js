// 기본 컨텐츠 생성형 AI
import { GoogleGenAI } from "@google/genai";
// 환경 변수 GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


