import { createBrowserRouter } from "react-router-dom";

// rootLayout 관련 경로 배열 불러오기
import rootRoutes from "./routes/rootRoutes";

// dummyLayout 관련 경로 배열 불러오기
import dummyRoutes from "./routes/dummyRoutes";

const router = createBrowserRouter([...rootRoutes, ...dummyRoutes]);

export default router;
